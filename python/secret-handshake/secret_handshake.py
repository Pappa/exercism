def handshake(n):
    if n < 1:
        return []
    else:
        bin = n if isinstance(n, int) else int(n, 2)
        output_commands = [v for (k, v) in cmd if bin & k]
        return output_commands if bin & 0b10000 else output_commands[::-1]

def code(handshake):
    handshake_commands = [ (k, v) for (k, v) in cmd if v in handshake ]
    command_value = sum([k for (k, v) in handshake_commands ])
    ordered_commands = [v for (k, v) in handshake_commands ]
    if ordered_commands != handshake:
        command_value += 0b10000
    print(ordered_commands == handshake, ordered_commands, handshake)
    print(format(command_value, 'b'))
    return format(command_value, 'b')


commands = ['wink', 'double blink', 'close your eyes', 'jump']
bits = [0b1, 0b10, 0b100, 0b1000]
cmd = zip(bits, commands)

