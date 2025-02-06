const std = @import("std"); // Importa a biblioteca padrão do Zig
const network = @import("network.zig"); // Importa a biblioteca networkconst math = @import("math.zig"); // Importa a biblioteca math

pub fn main() !void { // Define a função principal que retorna um tipo void ou um erroid ou um erro
    const num: i8 = 8; // Declara uma constante do tipo inteiro de 8 bits
    std.debug.print("Hello, world!\n", .{}); // Imprime "Hello, world!" no console
    std.debug.print("Hellos: {}\n", .{num}); // Imprime "Hellos: 8" no console, substituindo {} pelo valor de num   std.debug.print("Hellos: {}\n", .{num}); // Imprime "Hellos: 8" no console, substituindo {} pelo valor de num

    // std.debug.print("Resposta HTTP: {}\n", .{response});
    // const response = try network.http_get("https://example.com"); // Usando uma função da biblioteca network    // Usando uma função da biblioteca math
    // const result = math.add(5, 3); // Supondo que a biblioteca math tenha uma função add
    // std.debug.print("Resultado da adição: {}\n", .{result});
}

// const std = @import("std");

// Importa a biblioteca padrão do Zig, que contém várias funções e utilitários úteis.
// pub fn main() !void {

// Define a função principal do programa. pub significa que a função é pública. fn é a palavra-chave para definir uma função. !void indica que a função pode retornar um tipo void ou um erro.
// const num: i8 = 8;

// Declara uma constante chamada num do tipo i8 (inteiro de 8 bits) e a inicializa com o valor 8.
// std.debug.print("Hello, world!\n", .{});

// Usa a função print da biblioteca padrão para imprimir a string "Hello, world!" no console. \n é um caractere de nova linha. O . {} indica que não há argumentos adicionais para substituir na string.
// std.debug.print("Hellos: {}\n", .{num});

// Imprime a string "Hellos: 8" no console. {} é um placeholder que será substituído pelo valor de num.

//EXPLICAÇÃO
// Claro! Vou explicar o que muda se você chamar outra biblioteca e o que você pode fazer com isso.

// Importando Outras Bibliotecas
// No Zig, você pode importar outras bibliotecas além da biblioteca padrão (std). Essas bibliotecas podem fornecer
// funcionalidades adicionais que não estão disponíveis na biblioteca padrão. A sintaxe para importar uma biblioteca
// é a mesma: const <nome> = @import("<caminho>");.

// Exemplo de Importação de Outra Biblioteca
// Vamos supor que você tenha uma biblioteca chamada math.zig que fornece funções matemáticas adicionais. Você pode
// importá-la da seguinte maneira:

// hello.zig
// O Que Você Pode Fazer com Outras Bibliotecas
// Funções Matemáticas Avançadas:

// Bibliotecas matemáticas podem fornecer funções para cálculos avançados, como trigonometria, álgebra linear, etc.
// Manipulação de Arquivos:

// Bibliotecas específicas podem oferecer funções para leitura e escrita de arquivos, manipulação de diretórios, etc.
// Redes:

// Bibliotecas de rede podem fornecer funcionalidades para comunicação via TCP/IP, HTTP, WebSockets, etc.
// Gráficos e Interface de Usuário:

// Bibliotecas gráficas podem ajudar na criação de interfaces de usuário, renderização de gráficos, etc.
// Exemplo de Biblioteca de Redes
// Vamos supor que você tenha uma biblioteca chamada network.zig para operações de rede:

// Conclusão
// Importar outras bibliotecas no Zig permite que você expanda as funcionalidades do seu programa, utilizando
// funções e utilitários adicionais que não estão disponíveis na biblioteca padrão. Isso pode incluir operações
// matemáticas avançadas, manipulação de arquivos, comunicação de rede, entre outras.
