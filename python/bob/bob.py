answers = {
	'question': 'Sure.',
	'yell': 'Whoa, chill out!',
	'nada': 'Fine. Be that way!',
	'whatever': 'Whatever.'
}

def hey(input):
    letters = ''.join([c if c.isalnum() else '' for c in input])
    trimmed = input.strip()
    if len(letters) > 0 and letters.isupper():
    	return answers['yell']
    elif len(trimmed) == 0:
    	return answers['nada']
    elif trimmed[-1] == '?':
    	return answers['question']
    else:
    	return answers['whatever']
