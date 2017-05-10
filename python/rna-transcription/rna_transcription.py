nucleotideMap = {
	"G": "C",
	"C": "G",
	"T": "A",
	"A": "U" }

def to_rna(input):
    nucleotides = list(input)
    rnaLetters = []

    for n in nucleotides:
    	if n in nucleotideMap:
    		rnaLetters.append(nucleotideMap[n])
    	else:
    		return ""
    return "".join(rnaLetters)

