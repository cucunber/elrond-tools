export const fileReader = (f: File) => {
    return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = function () {
          const readResult = reader.result as string;
          resolve(readResult);
        };
        reader.onerror = function () {
          resolve('null');
        };
        reader.readAsText(f);
    });
}