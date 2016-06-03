function HB_BEFORE() {
  console.log("hb before");
  HB.setCustomConditionValue('cond', 'false');
}

function HB_READY() {
  console.log("hb ready");
  HB.setCustomConditionValue('cond', 'true');
}
