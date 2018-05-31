def handshake(n):
    if not is_valid(n):
        return []
    else:
        bin = n if isinstance(n, int) else int(n, 2)
        output_commands = [v for (k, v) in cmd if bin & k]
        return output_commands[::-1] if bin & 0b10000 else output_commands

def code(handshake):
    if (any(h not in commands for h in handshake)):
        return '0'
    handshake_commands = [ (k, v) for (k, v) in cmd if v in handshake ]
    command_value = sum([k for (k, v) in handshake_commands ])
    ordered_commands = [v for (k, v) in handshake_commands ]
    if ordered_commands != handshake:
        command_value += 0b10000
    return format(command_value, 'b')

def is_valid(n):
    if isinstance(n, int) and n > 0:
        return True
    elif isinstance(n, str) and all(c in '01' for c in n):
        return True
    else:
        return False


commands = ['wink', 'double blink', 'close your eyes', 'jump']
bits = [0b1, 0b10, 0b100, 0b1000]
cmd = zip(bits, commands)

