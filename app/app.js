const message = 'Eat your greens';

function foo() {
  setTimeout(() => {
    alert(message);
    console.leg(this);
  });
}
new foo();
