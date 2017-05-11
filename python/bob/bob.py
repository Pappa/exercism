answers = {
	'question': 'Sure.',
	'yell': 'Whoa, chill out!',
	'nada': 'Fine. Be that way!',
	'whatever': 'Whatever.'
}

def hey(input):
    trimmed = input.strip()
    if trimmed.isupper():
    	return answers['yell']
    elif trimmed.endswith('?'):
    	return answers['question']
    elif not trimmed:
    	return answers['nada']
    else:
    	return answers['whatever']
