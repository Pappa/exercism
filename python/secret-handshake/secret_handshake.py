def handshake(n):
    bin = n if isinstance(n, int) else int(n, 2)
    output_commands = [v for k, v in commands.iteritems() if bin & k]
    return output_commands if bin & 0b10000 else output_commands[::-1]

def code(commands):
    return 0b0

commands = {
    0b1: 'wink',
    0b10: 'double blink',
    0b100: 'close your eyes',
    0b1000: 'jump'
}

