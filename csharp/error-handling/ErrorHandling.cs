using System;
using System.Linq;

public static class ErrorHandling
{
    public static void HandleErrorByThrowingException() =>
        throw new Exception();

    public static int? HandleErrorByReturningNullableType(string input)
    {
        if (int.TryParse(input, out int output))
        {
            return output;
        }
        return null;
    }

    public static bool HandleErrorWithOutParam(string input, out int result) =>
        int.TryParse(input, out result);

    public static void DisposableResourcesAreDisposedWhenExceptionIsThrown(IDisposable disposableObject)
    {
        disposableObject.Dispose();
        throw new Exception();
    }
}
