export const getSystemSignature = (): string => {
    let signature = localStorage.getItem('vortex_system_sig');

    if (!signature) {
        // Generate a simple but persistent mock signature
        const part1 = Math.random().toString(36).substring(2, 10);
        const part2 = Date.now().toString(36);
        signature = `VORTEX-${part1}-${part2}`.toUpperCase();
        localStorage.setItem('vortex_system_sig', signature);
    }

    return signature;
};

export const checkBinding = (username: string): string | null => {
    const bindings = JSON.parse(localStorage.getItem('vortex_system_bindings') || '{}');
    return bindings[username] || null;
};

export const bindSystem = (username: string, signature: string) => {
    const bindings = JSON.parse(localStorage.getItem('vortex_system_bindings') || '{}');
    bindings[username] = signature;
    localStorage.setItem('vortex_system_bindings', JSON.stringify(bindings));
};
