export function CopyText(text)
{
    navigator.clipboard.writeText(text);
    console.log(text + " copied!");
}
