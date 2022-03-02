import DifinityHelloWorld from 'ic:canisters/DifinityHelloWorld';

DifinityHelloWorld.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
