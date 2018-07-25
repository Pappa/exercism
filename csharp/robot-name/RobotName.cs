using System;

public class Robot
{
   private string name;
   
   public Robot()
   {
       Reset();
   }
    public string Name
    {
        get => name;
    }

    public void Reset()
    {
        string letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        string numbers = "1234567890";
        Random rand = new Random();

        name = GetRandomCharsFromString(letters, 2, rand);
        name += GetRandomCharsFromString(numbers, 3, rand);
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