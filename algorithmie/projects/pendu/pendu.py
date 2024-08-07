import os
import random
from unidecode import unidecode        # pip install Unidecode
import msvcrt as m

EASY_RANGE = (2, 5)
MEDIUM_RANGE = (6, 11)
HARD_RANGE = (12, 20)
RANGES = [EASY_RANGE, MEDIUM_RANGE, HARD_RANGE]
already_used_words = []
MAX_NB_TRY = 10
VALID_ENTRIES = [['oui', 'y', 'o', 'yes',  'true'], ['non', 'n', 'no','false']]

nb_win = 0
nb_loose = 0
selected_level = 0


draws = [
    '\n'+
    '\n'+
    '\n'+
    '\n'+
    '\n'+
    '\n'+
    '\n',

    '\n'+
    '\n'+
    '\n'+
    '\n'+
    '\n'+
    '\n'+
    '--------------\n',

    '|\n'+
    '|\n'+
    '|\n'+
    '|\n'+
    '|\n'+
    '|\n'+
    '--------------\n',

    '|------\n'+
    '|     \n'+
    '|\n'+
    '|\n'+
    '|\n'+
    '|\n'+
    '--------------\n',

    '|------\n'+
    '|     |\n'+
    '|\n'+
    '|\n'+
    '|\n'+
    '|\n'+
    '--------------\n',

    '|------\n'+
    '|     |\n'+
    '|     O\n'+
    '|\n'+
    '|\n'+
    '|\n'+
    '--------------\n',

    '|------\n'+
    '|     |\n'+
    '|     O\n'+
    '|     |\n'+
    '|\n'+
    '|\n'+
    '--------------\n',

    '|------\n'+
    '|     | \n'+
    '|     O \n'+
    '|     |\ \n'+
    '|       \n'+
    '|\n'+
    '--------------\n',

    '|------\n'+
    '|     |\n'+
    '|     O \n'+
    '|    /|\ \n'+
    '|       \n'+
    '|\n'+
    '--------------\n',

    '|------\n'+
    '|     |\n'+
    '|     O \n'+
    '|    /|\ \n'+
    '|    /  \n'+
    '|\n'+
    '--------------\n',

    '|------\n'+
    '|     |\n'+
    '|     O \n'+
    '|    /|\ \n'+
    '|    / \ \n'+
    '|\n'+
    '--------------\n'
    ]

def random_word(min_length = 0, max_length = 0):
    # Liste des mots dans le fichier
    words = []

    # Liste des mots sélectionnés en fonction du niveau
    words_ok = []

    # Lecture de fichiers
    f = open('data/liste_francais.txt', 'r')
    # f = open('data/test.txt', 'r')

    for word in f:
        words.append(word.lower().replace('\n', ''))
    f.close()

    # Prendre uniquement les mots compris dans les limites imposées
    for word in words:
        if  min_length != 0:
            if (min_length <= len(word) <= max_length) and word not in already_used_words:
                words_ok.append(word)
        else:
            words_ok.append(word)
    random_index = random.randint(0, len(words_ok) - 1)
    
    selected_word = words_ok[random_index]
        
    return selected_word

def draw_title():
    print(' --- PENDU --- ')
    print('')
    if selected_level == 1:
        print(f'EASY MODE : {EASY_RANGE} letters')
    if selected_level == 2:
        print(f'MEDIUM MODE : {MEDIUM_RANGE} letters')
    if selected_level == 3:
        print(f'HARD MODE : {HARD_RANGE} letters')
    print('')

def draw_word(word, found_letters):
    os.system('cls')
    
    draw_title()

    str_word = ""

    for index, letter in enumerate(word):
        if found_letters[index]:
            str_word += f' {letter} '
        else:
            str_word += f' _ '

    print('')
    print(str_word)
    print('')

def draw_hanged(nb_try):
    print(draws[nb_try])

def draw_final(word, is_found, nb_try):
    os.system('cls')
    if is_found:
        print('Gagné !')
        print(f'Vous avez trouvé le mot {word} en {nb_try} erreur{"s" if nb_try > 1 else ""}')
    else:
        draw_hanged(nb_try)
        print('Perdu !')
        print(f'Le mot était {word}')

def select_menu():
    print('')
    print('-- Pendu --')
    print('')
    print(f'Parties jouées : {nb_win + nb_loose}')
    print(f'Parties gagnées : {nb_win}')
    print(f'Parties perdues : {nb_loose}')
    print('')
    print(f'1. Facile [longueur : {EASY_RANGE[0]}-{EASY_RANGE[1]} lettres]')
    print(f'2. Moyen [longueur : {MEDIUM_RANGE[0]}-{MEDIUM_RANGE[1]} lettres]')
    print(f'3. Difficile [longueur : {HARD_RANGE[0]}-{HARD_RANGE[1]} lettres]')
    print('')

    is_valid_choice = False

    while not is_valid_choice:
        print('Choix : ')
        choice = unidecode(m.getwch().lower())

        if not choice.isdigit(): 
            print('Vous devez entrer un nombre.')
            continue
        else:
            if 1 <= int(choice) <= 3: is_valid_choice = True
            else : print('Vous devez entrer un nombre entre 1 et 3.')


    return int(choice)

def select_word(found_letters):
    choice = select_menu()
    global selected_level

    # EASY MODE
    if choice == 1:
        min = EASY_RANGE[0]
        max = EASY_RANGE[1]
        selected_level = 1
    elif choice == 2:
        min = MEDIUM_RANGE[0]
        max = MEDIUM_RANGE[1]
        selected_level = 2
    else:
        min = HARD_RANGE[0]
        max = HARD_RANGE[1]
        selected_level = 3
    selected_word = random_word(min, max)

    for index, letter in enumerate(selected_word):
        if not str(letter).isalpha():
            found_letters.append(True)
        else:
            found_letters.append(False)

    return selected_word

def guess_word(word, already_chose_letters, found_letters, nb_try):
    print('')
    print(f'Lettres entrées : {already_chose_letters}')
    print('')
    print('Choisissez une lettre : ')
    choose_letter = unidecode(m.getwch().lower())

    while not choose_letter.isalpha() or choose_letter in already_chose_letters:
        if not choose_letter.isalpha():
            print("Ce n'est pas une lettre")
        else:    
            print("La lettre a déjà été choisie.")
        print('Choisissez une lettre : ')
        choose_letter = unidecode(m.getwch().lower())
    
    already_chose_letters.append(choose_letter)

    found = False

    for index, letter in enumerate(word):
        if unidecode(letter) == choose_letter:
            found_letters[index] = True
            found = True
    
    if not found:
        nb_try += 1
    
    return nb_try

def check_is_found(found_letters):
    
    for value in found_letters:
        if not value:
            return False
    
    return True

def draw_played_words():
    str_words = "Mots déjà joués: ";

    for word in already_used_words:
        str_words += word + ", "
    
    print(str_words)

def play():
    is_running = True
    
    while is_running:
        os.system('cls')
        nb_try = 0
        already_chose_letters = []
        is_found = False
        found_letters = []


        word_to_guess = select_word(found_letters)

        draw_played_words()

        while not is_found and nb_try < MAX_NB_TRY:
            draw_word(word_to_guess, found_letters)
            draw_hanged(nb_try)
            nb_try = guess_word(
                word_to_guess, 
                already_chose_letters, 
                found_letters, 
                nb_try
            )
            is_found = check_is_found(found_letters)

        if is_found: 
            global nb_win 
            nb_win += 1
        else: 
            global nb_loose 
            nb_loose += 1
        
        os.system('cls')

        print('-------------------------')

        draw_final(word_to_guess, is_found, nb_try)

        is_valid_choice = False

        while not is_valid_choice:
            is_running = input('Voulez-vous rejouer ? ').lower()


            if is_running in VALID_ENTRIES[0] or is_running in VALID_ENTRIES[1]:
                is_valid_choice = True
                if is_running in VALID_ENTRIES[0]: is_running = True
                else: is_running = False
            else :
                print('Entrée non reconnue.')

# -- Programme principal -- 
play()
