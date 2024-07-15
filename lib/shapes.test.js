const { Triangle, Circle, Square } = require('./shapes');

test('Triangle renders correctly', () => {
    const shape = new Triangle('#ff0000');
    expect(shape.render()).toBe('<polygon points="150,20 280,180 20,180" fill="#ff0000" />');
});

test('Circle renders correctly', () => {
    const shape = new Circle('#00ff00');
    expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="#00ff00" />');
});

test('Square renders correctly', () => {
    const shape = new Square('#0000ff');
    expect(shape.render()).toBe('<rect x="50" y="20" width="200" height="160" fill="#0000ff" />');
});