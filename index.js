function handleConflict(a, b) {
  let conflict = (b - a) * 20;
  return conflict;
}
function writingText(text) {
  let info = text + " Sinh ngày: 26/08/2001";
  console.log(info);
}
console.log(handleConflict(1, 2));
writingText("Quang Sang 239");
