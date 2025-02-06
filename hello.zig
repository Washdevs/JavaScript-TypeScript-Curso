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
