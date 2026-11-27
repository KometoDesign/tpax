#!/usr/bin/python3
# Build site/data/data.json for the TPA X landing page.
# PREVIEW SNAPSHOT: the award sheet values below were read from TPAX_Award_Data on 2026-11-20 (8 men's votes, 1 women's); updated by hand with each ballot since (2026-11-24: 15 men's, 4 women's).
# The live version will be generated from the sheet's Web tab at each go-live; the shape of the file stays the same.
import csv, json, os, re, sys, unicodedata

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HIST = '/Users/tomislav/Library/CloudStorage/GoogleDrive-tomo@kometodesign.com/My Drive/TPA X/03_Data/TPAX_Total7_History.csv'
IMG = os.path.join(ROOT, 'site', 'img')
# per-file fingerprints for the page's asset URLs (?v=...): only a changed file is downloaded again.
# Keyed by path without extension; a master's web copies (.webp, players/m|s/) share its key. Bump SALT when build_img's settings change.
SALT = 'webp1'
def fingerprints():
    import hashlib
    out, have = {}, set()
    def fp(path): return hashlib.sha1(open(path, 'rb').read() + SALT.encode()).hexdigest()[:7]
    for d, _, files in os.walk(IMG):
        for f in sorted(files):
            if f.startswith('.'): continue
            rel = os.path.relpath(os.path.join(d, f), IMG); key, ext = os.path.splitext(rel)
            if ext.lower() == '.webp': continue
            out[key] = fp(os.path.join(d, f)); have.add(key)
    for d, _, files in os.walk(IMG):   # web-only files (no master): their own content
        for f in sorted(files):
            rel = os.path.relpath(os.path.join(d, f), IMG); key, ext = os.path.splitext(rel)
            if ext.lower() == '.webp' and not key.startswith(('players/m/', 'players/s/')) and key not in have: out[key] = fp(os.path.join(d, f))
    V = os.path.join(ROOT, 'site', 'video')
    for f in sorted(os.listdir(V)) if os.path.isdir(V) else []:
        if not f.startswith('.'): out['video/' + f] = fp(os.path.join(V, f))
    return out

def slug(s): return re.sub(r'[^a-z0-9]+', '-', unicodedata.normalize('NFKD', s).encode('ascii', 'ignore').decode().lower()).strip('-')

# Players sheet: name, nation, 2025/26 club, crest file
PLAYERS = [
    ('Milan Glušac', 'SRB', 'Novi Beograd', 'NoviBeograd.png'), ('Ákos Nagy', 'HUN', 'Ferencváros', 'Ferencvaros.svg'),
    ('Dušan Mandić', 'SRB', 'Ferencváros', 'Ferencvaros.svg'), ('Stylianos Argyropoulos', 'GRE', 'Ferencváros', 'Ferencvaros.svg'),
    ('Krisztián Manhercz', 'HUN', 'Ferencváros', 'Ferencvaros.svg'), ('Strahinja Rašović', 'SRB', 'Radnički Kragujevac', 'RadnickiKragujevac.png'),
    ('Konstantinos Kakaris', 'GRE', 'Olympiacos', 'Olympiacos.png'), ('Dimitrios Skoumpakis', 'GRE', 'Panathinaikos', 'Panathinaikos.svg'),
    ('Álvaro Granados', 'ESP', 'Pro Recco', 'ProRecco.png'), ('Thomas Vernoux', 'FRA', 'CN Marseille', 'Marseille.svg'),
    ('Gergő Zalánki', 'HUN', 'Olympiacos', 'Olympiacos.png'), ('Bernat Sanahuja', 'ESP', 'CN Atlètic-Barceloneta', 'Barceloneta.png'),
    ('Unai Aguirre', 'ESP', 'CN Atlètic-Barceloneta', 'Barceloneta.png'), ('Alberto Munárriz', 'ESP', 'CN Atlètic-Barceloneta', 'Barceloneta.png'),
    ('Konstantinos Genidounias', 'GRE', 'Olympiacos', 'Olympiacos.png'), ('Vince Vigvári', 'HUN', 'CN Atlètic-Barceloneta', 'Barceloneta.png'),
    ('Nikola Jakšić', 'SRB', 'Radnički Kragujevac', 'RadnickiKragujevac.png'), ('Nikola Dedović', 'SRB', 'Radnički Kragujevac', 'RadnickiKragujevac.png'), ('Panagiotis Tzortzatos', 'GRE', 'Olympiacos', 'Olympiacos.png'),
    ('Roger Tahull', 'ESP', 'CN Atlètic-Barceloneta', 'Barceloneta.png'),
    # women for the TEST media juror (preview only): last year's Total 7; clubs left empty rather than guessed
    ('Martina Terré', 'ESP', 'CN Sant Andreu', 'SantAndreu.png'), ('Emily Ausmus', 'USA', 'USC Trojans', 'USC.svg'), ('Paula Leitón', 'ESP', '', ''), ('Simone van de Kraats', 'NED', 'CN Sabadell', 'Sabadell.png'),
    ('Rita Keszthelyi', 'HUN', 'Ferencváros', 'Ferencvaros.svg'), ('Foteini Tricha', 'GRE', 'Olympiacos', 'Olympiacos.png'), ('Bea Ortiz', 'ESP', 'Ferencváros', 'Ferencvaros.svg'),
    # women's ballot 1 (Evangelos Doudesis, 2026-11-20); Ausmus is above. Clubs = 2025/26 (Players sheet)
    ('Diana Khamraeva', 'RUS', 'Burevestnik', ''), ('Eleni Xenaki', 'GRE', 'Vouliagmeni', 'Vouliagmeni.png'), ('Panna Tiba', 'HUN', 'UVSE', 'UVSE.png'),
    ('Rachel Fattal', 'USA', 'NYAC', 'NYAC.png'), ('Krisztina Garda', 'HUN', 'Dunaújváros', 'Dunaujvaros.svg'), ('Tilly Kearns', 'AUS', 'CN Mataró', 'Mataro.svg'),
    # women's ballot 2 (Rita Keszthelyi, 2026-11-22); van de Kraats + Ausmus are above. Clubs = 2025/26 (Euro 2026 media guides, club news)
    ('Boglárka Neszmély', 'HUN', 'Ferencváros', 'Ferencvaros.svg'), ('Abby Andrews', 'AUS', 'Olympiacos', 'Olympiacos.png'),
    ('Kitty-Lynn Joustra', 'NED', 'Vouliagmeni', 'Vouliagmeni.png'), ('Stefania Santa', 'GRE', 'Olympiacos', 'Olympiacos.png'), ('Paula Crespí', 'ESP', 'CN Sabadell', 'Sabadell.png'),
    # women's ballot 3 (Foteini Tricha, 2026-11-22). Neushul: no pro club in 2025/26, NYAC as for Fattal. Halligan: Ekipe Orizzonte (crest = the club site's icon, user OK 11-22)
    ('Ryann Neushul', 'USA', 'NYAC', 'NYAC.png'), ('Bronte Halligan', 'AUS', 'Ekipe Orizzonte', 'Orizzonte.png'), ('Ioanna Stamatopoulou', 'GRE', 'Olympiacos', 'Olympiacos.png'),
    # women's ballot 4 (Simone van de Kraats, 2026-11-23); Ortiz, Terré, Tricha, Ausmus, Neushul, Joustra are above
    ('Jewel Roemer', 'USA', 'CN Mataró', 'Mataro.svg'),
]
players = {}
for name, nat, club, crest in PLAYERS:
    first, last = name.split(' ', 1)
    pid = slug(last + ' ' + first)
    players[pid] = {'n': name, 'f': first, 'l': last, 'nat': nat, 'club': club, 'crest': crest,
                    'photo': os.path.exists(os.path.join(IMG, 'players', pid + '.jpg'))}

# Ballots + Votes sheets (post order = order on the page; posted/ig are filled at go-live)
# role lines follow the juror posts (Jurors sheet O-S): national team = flag + cover label, club = crest + club label, both = both
def RL(nat=None, cover=None, crest=None, club=None):
    L = []
    if cover: L.append(['flag', nat, cover])
    if club: L.append(['crest', crest, club.strip()])   # a label ending in * has a role note (Jurors: Role note / Role note (web))
    return L
J = lambda jid, name, role, nat, order, picks, tp, lines, note=None, a='m': {
    'id': jid, 'a': a, 'n': name, 'f': name.split(' ')[0], 'l': name.split(' ', 1)[1], 'type': 'Expert', 'role': role, 'nat': nat,
    'order': order, 'posted': None, 'ig': None, 'photo': os.path.exists(os.path.join(IMG, 'jurors', jid + '.jpg')),
    'picks': picks, 'tp': tp, 'lines': lines, 'note': note}
jurors = [   # order = posting order (user 2026-11-22: Savić, Perrone, Doudesis, Tucak, Radović, Vlachos, Bajić, Gojković, Varga, then 10+ unchanged)
    J('savic-dejan', 'Dejan Savić', 'Montenegro head coach', 'MNE', 1,
      # 2026-11-20: user moved Mandić to RD and Nagy to RW
      {'GK': 'glusac-milan', 'LW': 'rasovic-strahinja', 'CF': 'kakaris-konstantinos', 'RW': 'nagy-akos', 'LD': 'manhercz-krisztian', 'CB': 'argyropoulos-stylianos', 'RD': 'mandic-dusan'}, 'RD', RL('MNE', 'Montenegro head coach')),
    J('bajic-zoran', 'Zoran Bajić', 'HAVK Mladost head coach', 'CRO', 7,
      {'GK': 'aguirre-unai', 'LW': 'granados-alvaro', 'CF': 'kakaris-konstantinos', 'RW': 'zalanki-gergo', 'LD': 'vernoux-thomas', 'CB': 'skoumpakis-dimitrios', 'RD': 'sanahuja-bernat'}, 'LD', RL(crest='Mladost.svg', club='HAVK Mladost head coach*'),
      'Coached HAVK Mladost in 2025/26, the season this award covers. Head coach of Novi Beograd from 2026/27.'),
    # 2026-11-23: Germany head coach (from 1 Jan 2026) AND Waspo 98 Hannover head coach, both confirmed by the user after a brief club-only revert
    J('radovic-aleksandar', 'Aleksandar Radović', 'Waspo 98 Hannover head coach', 'GER', 5,
      {'GK': 'aguirre-unai', 'LW': 'vigvari-vince', 'CF': 'kakaris-konstantinos', 'RW': 'mandic-dusan', 'LD': 'argyropoulos-stylianos', 'CB': 'munarriz-alberto', 'RD': 'genidounias-konstantinos'}, 'CB', RL('GER', 'Germany head coach', 'Waspo98Hannover.png', 'Waspo 98 Hannover head coach')),
    J('tucak-ivica', 'Ivica Tucak', 'Croatia head coach', 'CRO', 4,
      {'GK': 'aguirre-unai', 'LW': 'manhercz-krisztian', 'CF': 'kakaris-konstantinos', 'RW': 'mandic-dusan', 'LD': 'vernoux-thomas', 'CB': 'skoumpakis-dimitrios', 'RD': 'sanahuja-bernat'}, 'RW', RL('CRO', 'Croatia head coach')),
    # 2026-11-20: club coach only (Jadran Herceg Novi since Aug 2024); crest = the club burgee cut from its official logo
    J('gojkovic-vladimir', 'Vladimir Gojković', 'Jadran Herceg Novi head coach', 'MNE', 8,
      {'GK': 'aguirre-unai', 'LW': 'manhercz-krisztian', 'CF': 'kakaris-konstantinos', 'RW': 'mandic-dusan', 'LD': 'jaksic-nikola', 'CB': 'skoumpakis-dimitrios', 'RD': 'munarriz-alberto'}, 'CB', RL(crest='JadranHercegNovi.png', club='Jadran Herceg Novi head coach')),
    # 2026-11-20: his Left/Right are from the goalkeeper's view; left-handers Zalánki and Mandić play the right side (user)
    J('vlachos-thodoris', 'Thodoris Vlachos', 'Greece head coach', 'GRE', 6,
      {'GK': 'tzortzatos-panagiotis', 'LW': 'manhercz-krisztian', 'CF': 'kakaris-konstantinos', 'RW': 'zalanki-gergo', 'LD': 'argyropoulos-stylianos', 'CB': 'skoumpakis-dimitrios', 'RD': 'mandic-dusan'}, 'LD', RL('GRE', 'Greece head coach')),
    # 2026-11-20: votes as a past winner; wings per the user (Mandić RW, Manhercz LW)
    J('perrone-felipe', 'Felipe Perrone', 'Total Player 2018', 'ESP', 2,
      {'GK': 'aguirre-unai', 'LW': 'manhercz-krisztian', 'CF': 'tahull-roger', 'RW': 'mandic-dusan', 'LD': 'argyropoulos-stylianos', 'CB': 'skoumpakis-dimitrios', 'RD': 'munarriz-alberto'}, 'LD', RL('ESP', 'Total Player 2018')),
    # 2026-11-20: votes as a past winner (Total Player 2019); he gave RD (Mandić) and LD (Argyropoulos, MVP), wings placed as before
    J('varga-denes', 'Dénes Varga', 'Total Player 2019', 'HUN', 9,
      {'GK': 'aguirre-unai', 'LW': 'manhercz-krisztian', 'CF': 'kakaris-konstantinos', 'RW': 'nagy-akos', 'LD': 'argyropoulos-stylianos', 'CB': 'skoumpakis-dimitrios', 'RD': 'mandic-dusan'}, 'LD', RL('HUN', 'Total Player 2019')),
    # 2026-11-20: the first women's ballot; Netherlands women's head coach. He gave 1/2 (right side) and 4/5 (left side) as pairs
    J('doudesis-evangelos', 'Evangelos Doudesis', 'Netherlands head coach', 'NED', 3,
      {'GK': 'khamraeva-diana', 'LW': 'ausmus-emily', 'CF': 'kearns-tilly', 'RW': 'xenaki-eleni', 'LD': 'fattal-rachel', 'CB': 'garda-krisztina', 'RD': 'tiba-panna'}, 'LW', RL('NED', 'Netherlands head coach'), a='w'),
    # 2026-11-21: Italy head coach. No positions written; "Best player" = Jaksic (Total Player). Drivers per the user: Jaksic LD,
    # Sanahuja RD (Jaksic is a driver, never a wing), so Argyropoulos LW
    J('campagna-alessandro', 'Alessandro Campagna', 'Italy head coach', 'ITA', 10,
      {'GK': 'aguirre-unai', 'LW': 'argyropoulos-stylianos', 'CF': 'kakaris-konstantinos', 'RW': 'mandic-dusan', 'LD': 'jaksic-nikola', 'CB': 'skoumpakis-dimitrios', 'RD': 'sanahuja-bernat'}, 'LD', RL('ITA', 'Italy head coach')),
    # 2026-11-21: club coach only (Olympiacos since 2025/26; Barceloneta 2021-25). "Best player" = Vigvari; wings per the user:
    # Vigvari LW, Zalanki RW; the rest in the slots the user set before (Mandic RD, Argyropoulos LD, Munarriz CB)
    J('fatovic-elvis', 'Elvis Fatović', 'Olympiacos head coach', 'CRO', 11,
      {'GK': 'aguirre-unai', 'LW': 'vigvari-vince', 'CF': 'kakaris-konstantinos', 'RW': 'zalanki-gergo', 'LD': 'argyropoulos-stylianos', 'CB': 'munarriz-alberto', 'RD': 'mandic-dusan'}, 'LW', RL(crest='Olympiacos.png', club='Olympiacos head coach')),
    # 2026-11-21: votes as Hungary captain (also a player in this award). Left/Right from the attacker's view; wings per the user:
    # Vigvari LW, Nagy RW; "MVP" = Argyropoulos
    J('manhercz-krisztian', 'Krisztián Manhercz', 'Hungary captain', 'HUN', 18,
      {'GK': 'aguirre-unai', 'LW': 'vigvari-vince', 'CF': 'kakaris-konstantinos', 'RW': 'nagy-akos', 'LD': 'argyropoulos-stylianos', 'CB': 'skoumpakis-dimitrios', 'RD': 'munarriz-alberto'}, 'LD', RL('HUN', 'Hungary captain')),
    # 2026-11-21: votes as captain of Greece and Olympiacos (also a player in this award); positions as written, CD = CB; MVP Kakaris
    J('genidounias-konstantinos', 'Konstantinos Genidounias', 'Greece captain', 'GRE', 13,
      {'GK': 'aguirre-unai', 'LW': 'vigvari-vince', 'CF': 'kakaris-konstantinos', 'RW': 'zalanki-gergo', 'LD': 'argyropoulos-stylianos', 'CB': 'skoumpakis-dimitrios', 'RD': 'mandic-dusan'}, 'CF', RL('GRE', 'Greece captain', 'Olympiacos.png', 'Olympiacos captain')),
    # 2026-11-21: China men's head coach; positions as written (CD = CB); "mvp" Mandic. Photo sent by the user 2026-11-23
    J('asic-ivan', 'Ivan Asić', 'China head coach', 'CHN', 14,
      {'GK': 'aguirre-unai', 'LW': 'rasovic-strahinja', 'CF': 'kakaris-konstantinos', 'RW': 'mandic-dusan', 'LD': 'manhercz-krisztian', 'CB': 'argyropoulos-stylianos', 'RD': 'sanahuja-bernat'}, 'RW', RL('CHN', 'China head coach')),
    # 2026-11-21: votes as Croatia captain; positions EXACTLY as written (user: never change juror-supplied positions); "najbolji" Mandic
    J('bijac-marko', 'Marko Bijač', 'Croatia captain', 'CRO', 15,
      {'GK': 'aguirre-unai', 'LW': 'manhercz-krisztian', 'CF': 'kakaris-konstantinos', 'RW': 'mandic-dusan', 'LD': 'munarriz-alberto', 'CB': 'skoumpakis-dimitrios', 'RD': 'sanahuja-bernat'}, 'RW', RL('CRO', 'Croatia captain')),
    # 2026-11-22: women's ballot 2; votes as Hungary captain (Euro 2026 guide marks her (C)); positions exactly as written (CD = CB); "Mvp" Ausmus
    J('keszthelyi-rita', 'Rita Keszthelyi', 'Hungary captain', 'HUN', 16,
      {'GK': 'neszmely-boglarka', 'LW': 'ausmus-emily', 'CF': 'joustra-kitty-lynn', 'RW': 'van-de-kraats-simone', 'LD': 'santa-stefania', 'CB': 'crespi-paula', 'RD': 'andrews-abby'}, 'LW', RL('HUN', 'Hungary captain'), a='w'),
    # 2026-11-22: women's ballot 3; votes as a past winner (Total Player 2025); positions exactly as written; "my pick for the 5 pts" Ausmus
    J('tricha-foteini', 'Foteini Tricha', 'Total Player 2025', 'GRE', 17,
      {'GK': 'stamatopoulou-ioanna', 'LW': 'ausmus-emily', 'CF': 'joustra-kitty-lynn', 'RW': 'andrews-abby', 'LD': 'neushul-ryann', 'CB': 'halligan-bronte', 'RD': 'tiba-panna'}, 'LW', RL('GRE', 'Total Player 2025'), a='w'),
    # 2026-11-23: women's ballot 4; votes as a past winner (Total Player 2023, user). 1/2 = right, 4/5 = left; wings per the user:
    # Roemer RW, Ausmus LW, so Ortiz RD, Tricha LD; "the 5 points are for Ryan" = Neushul (CB, as written)
    J('van-de-kraats-simone', 'Simone van de Kraats', 'Total Player 2023', 'NED', 12,
      {'GK': 'terre-martina', 'LW': 'ausmus-emily', 'CF': 'joustra-kitty-lynn', 'RW': 'roemer-jewel', 'LD': 'tricha-foteini', 'CB': 'neushul-ryann', 'RD': 'ortiz-bea'}, 'CB', RL('NED', 'Total Player 2023'), a='w'),
    # 2026-11-24: men's ballot 15; club coach ONLY (user: "only put Uros as Radnicki head coach"; he left the Serbia job in May 2026).
    # His pairs ARE the formation (user, 2026-11-24): Kakaris + Jaksic = CF + CB, Argyropoulos + Rasovic = left (Rasovic LW),
    # Mandic + Dedovic = right (Mandic RW); "(MVP)" = Dedovic
    J('stevanovic-uros', 'Uroš Stevanović', 'Radnički Kragujevac head coach', 'SRB', 19,
      {'GK': 'aguirre-unai', 'LW': 'rasovic-strahinja', 'CF': 'kakaris-konstantinos', 'RW': 'mandic-dusan', 'LD': 'argyropoulos-stylianos', 'CB': 'jaksic-nikola', 'RD': 'dedovic-nikola'}, 'RD', RL(crest='RadnickiKragujevac.png', club='Radnički Kragujevac head coach')),
]

# TEST media juror (preview only, user 2026-11-17): a media juror votes in both awards, so the card holds two ballots.
# Not in the sheet and not counted in the standings.
TEST_W = {'GK': 'terre-martina', 'LW': 'ausmus-emily', 'CF': 'leiton-paula', 'RW': 'van-de-kraats-simone', 'LD': 'keszthelyi-rita', 'CB': 'tricha-foteini', 'RD': 'ortiz-bea'}
TEST_M = {'GK': 'glusac-milan', 'LW': 'granados-alvaro', 'CF': 'kakaris-konstantinos', 'RW': 'zalanki-gergo', 'LD': 'vernoux-thomas', 'CB': 'argyropoulos-stylianos', 'RD': 'genidounias-konstantinos'}
tj = J('test-media-juror', 'Test Media Juror', 'Media juror', '', 20, TEST_W, 'CF', [['text', '', 'Media juror · test card, both ballots']])
tj.update({'f': 'Test', 'l': 'Media Juror', 'type': 'Media', 'a': 'w', 'test': True,
           'ballots': [{'a': 'w', 'picks': TEST_W, 'tp': 'CF'}, {'a': 'm', 'picks': TEST_M, 'tp': 'RW'}]})
jurors.append(tj)

# Standings + Total 7 sheets (shown on the Results page only)
standings = {'m': [   # from the sheet's Standings tab after 15 men's ballots (2026-11-24, Stevanović)
    ('mandic-dusan', 1, 59, 13, 4), ('argyropoulos-stylianos', 2, 53, 11, 4), ('kakaris-konstantinos', 3, 47, 14, 1), ('aguirre-unai', 4, 39, 13, 0),
    ('skoumpakis-dimitrios', 5, 35, 10, 1), ('manhercz-krisztian', 6, 24, 8, 0), ('munarriz-alberto', 7, 23, 6, 1), ('vigvari-vince', 8, 17, 4, 1),
    ('sanahuja-bernat', 9, 15, 5, 0), ('jaksic-nikola', 10, 14, 3, 1), ('zalanki-gergo', 11, 12, 4, 0), ('vernoux-thomas', 12, 11, 2, 1),
    ('nagy-akos', 13, 9, 3, 0), ('rasovic-strahinja', 13, 9, 3, 0), ('dedovic-nikola', 15, 8, 1, 1), ('glusac-milan', 16, 3, 1, 0), ('granados-alvaro', 16, 3, 1, 0),
    ('genidounias-konstantinos', 16, 3, 1, 0), ('tzortzatos-panagiotis', 16, 3, 1, 0), ('tahull-roger', 16, 3, 1, 0)],
    'w': [   # after 4 ballots (Doudesis, Keszthelyi, Tricha, van de Kraats; 2026-11-23)
    ('ausmus-emily', 1, 27, 4, 3), ('neushul-ryann', 2, 11, 2, 1), ('joustra-kitty-lynn', 3, 9, 3, 0), ('tiba-panna', 4, 6, 2, 0), ('andrews-abby', 4, 6, 2, 0),
    ('khamraeva-diana', 6, 3, 1, 0), ('xenaki-eleni', 6, 3, 1, 0), ('fattal-rachel', 6, 3, 1, 0), ('garda-krisztina', 6, 3, 1, 0),
    ('kearns-tilly', 6, 3, 1, 0), ('neszmely-boglarka', 6, 3, 1, 0), ('van-de-kraats-simone', 6, 3, 1, 0), ('santa-stefania', 6, 3, 1, 0),
    ('crespi-paula', 6, 3, 1, 0), ('halligan-bronte', 6, 3, 1, 0), ('stamatopoulou-ioanna', 6, 3, 1, 0),
    ('terre-martina', 6, 3, 1, 0), ('roemer-jewel', 6, 3, 1, 0), ('tricha-foteini', 6, 3, 1, 0), ('ortiz-bea', 6, 3, 1, 0)]}
standings = {a: [{'p': p, 'rank': r, 'pts': pts, 'votes': b, 'tp': tp} for p, r, pts, b, tp in rows] for a, rows in standings.items()}
total7 = {'m': {'GK': 'aguirre-unai', 'LW': 'manhercz-krisztian', 'CF': 'kakaris-konstantinos', 'RW': 'mandic-dusan', 'LD': 'argyropoulos-stylianos', 'CB': 'skoumpakis-dimitrios', 'RD': 'sanahuja-bernat'},
          'w': {'GK': 'khamraeva-diana', 'LW': 'ausmus-emily', 'CF': 'joustra-kitty-lynn', 'RW': 'xenaki-eleni', 'LD': 'fattal-rachel', 'CB': 'neushul-ryann', 'RD': 'tiba-panna'}}
total7Leader = {'m': 'RW', 'w': 'LW'}   # 2026-11-22: Mandic (RW) leads the men's standings again

# T7 Head-to-Head: the past Total 7s (03_Data/TPAX_Total7_History.csv) and the bracket (draw set 2026-11-16)
# ring photos for the H2H field (tools/prep_t7.py): player name -> {id, photo}
T7P = {v['n']: dict(v, id=k) for k, v in (json.load(open(os.path.join(ROOT, 'site', '_t7p_log.json'))) if os.path.exists(os.path.join(ROOT, 'site', '_t7p_log.json')) else {}).items()}
teams = {}
for r in csv.DictReader(open(HIST, encoding='utf-8')):
    a = 'm' if r['award'] == 'Men' else 'w'
    key = a + '-' + r['year']
    t = teams.setdefault(key, {'a': a, 'year': r['year'], 'label': r['lineup'], 'line': []})
    nm = (r['first_name'] + ' ' + r['last_name']).strip()
    t7log = T7P.get(nm) or {}
    t['line'].append({'pos': r['position'], 'n': nm, 'l': r['last_name'] or nm, 'nat': r['country'], 'tp': r['total_player'].strip().lower() in ('yes', 'y', '1', 'true'),
                      'id': t7log.get('id'), 'ph': bool(t7log.get('photo'))})
G = lambda gid, rnd, label, a=None, b=None, state='draw', **kw: dict({'id': gid, 'round': rnd, 'label': label, 'a': a, 'b': b, 'state': state}, **kw)
# the draw (user, 2026-11-16): men without the 2020 Timeless 7 (it meets the champion in the bonus final), women all 8
DRAW = {'m': [('m-2017', 'm-2021'), ('m-2019', 'm-2024'), ('m-2018', 'm-2023'), ('m-2022', 'm-2025')],
        'w': [('w-2018', 'w-2022'), ('w-2020', 'w-2024'), ('w-2019', 'w-2023'), ('w-2021', 'w-2025')]}
def bracket(a):
    g = [G('%s-qf%d' % (a, i + 1), 'qf', 'QF%d' % (i + 1), x, y, state='next') for i, (x, y) in enumerate(DRAW[a])] + [
G(a + '-sf1', 'sf', 'SF1', state='next'), G(a + '-sf2', 'sf', 'SF2', state='next'), G(a + '-f', 'f', 'Final', state='next')]
    if a == 'm': g.append(G('m-bf', 'bf', 'Bonus final', None, 'm-2020', state='next'))
    return g
h2h = {'m': bracket('m'), 'w': bracket('w')}
# live state (tools/live.json): game dates, live/result state and poll splits, and when each vote was posted on IG
LIVE = json.load(open(os.path.join(ROOT, 'tools', 'live.json'), encoding='utf-8'))
for a in h2h:
    for g in h2h[a]:
        g.update({k: v for k, v in LIVE.get('h2h', {}).get(g['id'], {}).items() if not k.startswith('_')})
# schedule-driven live window: each game is live from its VOTE NOW story (the posting plan, outbox/plan.py) for 24 h
try:
    import importlib.util, datetime as _dt
    _sp = importlib.util.spec_from_file_location('tpaxplan', os.path.expanduser('~/Developer/tpax-ig/outbox/plan.py')); _pl = importlib.util.module_from_spec(_sp); _sp.loader.exec_module(_pl)
    for _p in _pl.POSTS:
        _m = re.match(r'h2h-(men|women)-(qf\d|sf\d|f|bf)-\d{4}v\d{4}$', _p['slug'])
        if not _m: continue
        _id = ('m' if _m.group(1) == 'men' else 'w') + '-' + _m.group(2)
        _t = _dt.datetime.strptime(_p['day'][:10] + _p['time'], '%Y-%m-%d%H%M')
        for _g in h2h[_id[0]]:
            if _g['id'] == _id:
                _g['liveFrom'] = _t.strftime('%Y-%m-%dT%H:%M:00+01:00'); _g['liveTo'] = (_t + _dt.timedelta(hours=24)).strftime('%Y-%m-%dT%H:%M:00+01:00')
except Exception as _e:
    print('schedule windows skipped:', _e)
PROD = '--prod' in sys.argv   # the public page: posted votes only, no test card, no examples, no running totals until results
h2hPool = {'m': [k for k in sorted(teams) if k.startswith('m-') and not k.endswith('2020')], 'w': [k for k in sorted(teams) if k.startswith('w-')]}

editions = [
    [2017, '', '', 'Sandro', 'Sukno', [['9', 'points between Sukno and Prlainović'], ['4', 'Croatians in the first Total 7'], ['5', 'names per vote: a Top 5']]],
    [2018, 'Ekaterina', 'Prokofyeva', 'Felipe', 'Perrone', [['1st', 'women’s Total Player'], ['3', 'points between Perrone and Prlainović'], ['2nd', 'place in a row for Prlainović']]],
    [2019, 'Ashleigh', 'Johnson', 'Dénes', 'Varga', [['1', 'goalkeeper has won, in either award'], ['8', 'points between Varga and Di Fulvio'], ['3', 'Pro Recco players in the men’s Total 7']]],
    [2020, 'Maggie', 'Steffens', 'Tibor', 'Benedek', [['21st', 'century’s best: a career vote'], ['4', 'Americans in the women’s Timeless 7'], ['3', 'Hungarians in the men’s Timeless 7']]],
    [2021, 'Maddie', 'Musselman', 'Dušan', 'Mandić', [['1st & 2nd', 'for the Tokyo champions in both awards'], ['4', 'points between Mandić and Filipović'], ['5', 'Serbs in the men’s Total 7']]],
    [2022, 'Maddie', 'Musselman', 'Francesco', 'Di Fulvio', [['2', 'titles in a row for Musselman'], ['3', 'years from runner-up to winner'], ['2nd', 'runner-up finish for Keszthelyi']]],
    [2023, 'Simone', 'van de Kraats', 'Gergő', 'Zalánki', [['1st', 'Dutch winner'], ['109', 'points clear for Zalánki'], ['2', 'winners, both from the right side']]],
    [2024, 'Bea', 'Ortiz', 'Dušan', 'Mandić', [['2nd', 'title for Mandić'], ['1st & 2nd', 'for Sabadell teammates Ortiz and García'], ['4', 'Spaniards in the women’s Total 7']]],
    [2025, 'Foteini', 'Tricha', 'Álvaro', 'Granados', [['20', 'years old: the youngest winner'], ['4th', 'Total 7 in a row for Granados'], ['4', 'Sabadell players in the women’s Total 7']]],
]
hofImgs = sorted(f[:-4] for f in os.listdir(os.path.join(IMG, 'hof')) if f.endswith('.jpg') and not f.endswith('_large.jpg'))
# the year's Total 7 promo collage (tools/prep_t7c.py: site/img/t7c/<key>.jpg + size and edge colour)
T7C = json.load(open(os.path.join(ROOT, 'site', '_t7c_log.json'))) if os.path.exists(os.path.join(ROOT, 'site', '_t7c_log.json')) else {}
for k in teams:
    c = T7C.get(k); teams[k]['col'] = {'w': c['w'], 'h': c['h'], 'bg': c['bg']} if c and os.path.exists(os.path.join(IMG, 't7c', k + '.jpg')) else None
editions = [{'year': e[0], 'w': (e[1] + ' ' + e[2]).strip(), 'm': e[3] + ' ' + e[4], 'facts': e[5], 't7': [k for k in ('w-%d' % e[0], 'm-%d' % e[0]) if k in teams],
             'wImg': next((h for h in hofImgs if h.startswith('%d_Women' % e[0])), None), 'mImg': next((h for h in hofImgs if h.startswith('%d_Men' % e[0])), None)} for e in editions]
hof = []
for h in hofImgs:
    y, g, s = h.split('_', 2)
    nm = ' '.join(w.capitalize() for w in s.split('-'))
    nm = {'Denes Varga': 'Dénes Varga', 'Dusan Mandic': 'Dušan Mandić', 'Gergo Zalanki': 'Gergő Zalánki', 'Alvaro Granados': 'Álvaro Granados', 'Simone Van De Kraats': 'Simone van de Kraats', 'Francesco Di Fulvio': 'Francesco Di Fulvio'}.get(nm, nm)
    hof.append({'year': int(y), 'a': 'm' if g == 'Men' else 'w', 'n': nm, 'img': h})

LOG = json.load(open(os.path.join(ROOT, 'site', '_assets_log.json'))) if os.path.exists(os.path.join(ROOT, 'site', '_assets_log.json')) else {}
fy = {k: v.get('fy', 40) for k, v in LOG.items() if isinstance(v, dict)}
for pid in players: players[pid]['fy'] = fy.get('players/' + pid, 40)
for j in jurors:
    j['fy'] = fy.get('jurors/' + j['id'], 40)
    j['story'] = os.path.exists(os.path.join(IMG, 'stories', j['id'] + '.jpg'))   # the juror's IG vote story (export)
hofFy = {k.split('/', 1)[1]: v for k, v in fy.items() if k.startswith('hof/')}
for h in hof: h['banner'] = os.path.exists(os.path.join(IMG, 'banners', h['img'] + '.jpg'))   # HoF banner export, when there is one
NOTES = {'sf1': 'QF1 v QF2 winners', 'sf2': 'QF3 v QF4 winners', 'f': 'SF1 v SF2 winners', 'bf': 'Champion v 2020 Timeless 7'}
for a in h2h:
    for g in h2h[a]:
        key = g['id'].split('-', 1)[1]
        if key in NOTES: g['note'] = NOTES[key]
        for st, suf in (('imgFaceoff', 'face-off'), ('imgResult', 'result')):   # the game's story graphics (H2H master exports)
            if os.path.exists(os.path.join(IMG, 'h2h', g['id'] + '_' + suf + '.jpg')): g[st] = 'h2h/' + g['id'] + '_' + suf + '.jpg'
# preview only: the H2H master's own sample (men's bonus final, 2024 v the 2020 Timeless 7) shows how an opened game looks
# preview only: QF1 of each bracket shows the live state in the Vote view and a result in the Results view (sample shares)
h2hSample = {'m': {'id': 'm-qf1', 'pa': 58, 'pb': 42}, 'w': {'id': 'w-qf1', 'pa': 61, 'pb': 39}}
# a sample stops once its game has a real result (2026-11-24: men's QF1 decided 41-59)
h2hSample = {k: v for k, v in h2hSample.items() if [g for g in h2h[k] if g['id'] == v['id']][0].get('state') not in ('result', 'closed')}
# preview only: the results opener's example winners (draft 4, approved look), shown with an Example chip until the real standings exist
resultsSample = {'w': {'p': 'leiton-paula', 'pts': 176, 'club': 'CN Sabadell', 'crest': 'Sabadell.png'}, 'm': {'p': 'mandic-dusan', 'pts': 203}}

PHASE = sys.argv[1] if len(sys.argv) > 1 and not sys.argv[1].startswith('-') else 'vote'
if PROD:
    posted = LIVE.get('posted', {})
    jurors = [j for j in jurors if not j.get('test') and j['id'] in posted]
    for j in jurors:
        j['posted'] = posted[j['id']].get('at'); j['ig'] = posted[j['id']].get('ig') or j.get('ig')
        j['story'] = j['story']   # the story graphic is pushed with the vote
    h2hSample = resultsSample = None
    if PHASE != 'results':
        standings = {'m': [], 'w': []}; total7 = {'m': {}, 'w': {}}; total7Leader = {'m': None, 'w': None}
    keep = set()
    for j in jurors:
        for b in j.get('ballots') or [{'picks': j['picks']}]: keep.update(b['picks'].values())
    keep.update(r['p'] for a in standings for r in standings[a])
    players = {k: v for k, v in players.items() if k in keep}
import datetime
data = {
    'v': 1, 'ah': fingerprints(), 'updated': datetime.datetime.now(datetime.timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ'), 'phase': PHASE, 'preview': not PROD,
    'edition': 'TPA X', 'season': '2025/26', 'resultsDate': '2026-12-22', 'ig': 'https://www.instagram.com/total_waterpolo/', 'igStories': 'https://www.instagram.com/stories/total_waterpolo/',   # a game's own Story link (g.story) wins over the account's Stories
    'players': players, 'jurors': jurors, 'standings': standings, 'total7': total7, 'total7Leader': total7Leader,
    'crestLight': sorted(f for f in os.listdir(os.path.join(IMG, 'crests', 'light')) if not f.startswith('.') and not f.endswith('.webp')) if os.path.isdir(os.path.join(IMG, 'crests', 'light')) else [], 'h2h': h2h, 'h2hSample': h2hSample, 'resultsSample': resultsSample, 'h2hTeams': teams, 'hofFy': hofFy, 'resultsStory': None, 'h2hPool': h2hPool, 'editions': editions, 'hof': hof,
}
os.makedirs(os.path.join(ROOT, 'site', 'data'), exist_ok=True)
out = os.path.join(ROOT, 'site', 'data', 'data.json' if PROD else 'preview.json')   # data.json = public (posted votes only); preview.json = every vote, for the previews
json.dump(data, open(out, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
print('wrote', out, os.path.getsize(out), 'bytes;', len(jurors), 'votes,', len(players), 'players,', len(teams), 'past Total 7s,', len(hof), 'HoF')
