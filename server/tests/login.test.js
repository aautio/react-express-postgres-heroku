const authenticateHandler = require('../models/handlers/authenticate');

describe('testing user validation functionality', () => {
    beforeEach(() => {
        jest.resetModules() // Clears any cache in the tests.
    });

    test('rejection of invalid user email', async () => {
        // Arrange
        const testEmail = 'invalidEmail';
        const testPassword = 'password';

        // Act
        const isValid = await authenticateHandler.isUserCredentialsValid(testEmail, testPassword);

        // Assert
        expect(isValid).toBeFalsy();
    });

    test('rejection of invalid password', async () => {
        // Arrange
        const realEmail = 'johndoe@gmail.com';
        const wrongPassword = 'wrongPassword';

        // Act
        const isValid = await authenticateHandler.isUserCredentialsValid(realEmail, wrongPassword);

        // Assert
        expect(isValid).toBeFalsy();
    });

    test('acceptance of valid user', async () => {
        // Arrange
        const realEmail = 'johndoe@gmail.com';
        const correctPassword = 'a1234';

        // Act
        const isValid = await authenticateHandler.isUserCredentialsValid(realEmail, correctPassword);

        // Assert
        expect(isValid).toBe(true);
    });

});
