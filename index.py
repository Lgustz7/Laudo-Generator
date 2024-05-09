def quadro(texto):
    traco = ';' * (len(texto) + 4)
    print(traco)
    print('; ' + texto + ' ;')
    print(traco)

nome = input('>> ')
quadro(nome)
