const std = @import("std");

pub fn main() !void {
    const num: i8 = 8;
    std.debug.print("Hello, world!\n", .{});
    std.debug.print("Hellos: {}\n", .{num});
}
