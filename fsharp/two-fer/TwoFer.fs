module TwoFer

let twoFer (input: string option): string = 
    let who = defaultArg input "you"
    
    sprintf "One for %s, one for me." who