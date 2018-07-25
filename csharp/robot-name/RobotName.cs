using System;

public class Robot
{
   
   public Robot()
   {
       Reset();
   }
    public string Name
    {
        get;

        private set;
    }

    public void Reset()
    {
        string letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        string numbers = "1234567890";
        Random rand = new Random();

        Name = GetRandomCharsFromString(letters, 2, rand);
        Name += GetRandomCharsFromString(numbers, 3, rand);
    }

    private string GetRandomCharsFromString(string s, int n, Random r)
    {
        string output = "";

        for(int i = 0; i <= n; i++)
        {
            output += s[r.Next(s.Length)];
        }
        return output;
    }
}