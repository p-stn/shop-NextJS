const validateIdentifier = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(?:\+98|0)?9\d{9}$/;

    if (emailRegex.test(value)) {
        return {
            type: 'password',
            value,
        };
    }

    if (phoneRegex.test(value)) {
        return {
            type: 'otp',
            value,
        };
    }

    return null;
};

export default validateIdentifier