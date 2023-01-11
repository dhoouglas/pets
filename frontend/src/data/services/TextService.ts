export const TextService = {
    limitText(text: string, maximumSize: number): String {
        if(text.length < maximumSize) {
            return text
        }
        
        return text.slice(0, maximumSize) + '...';
    }
}