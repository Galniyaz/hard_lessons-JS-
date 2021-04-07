"use strict";

function argum (a) {
  if (typeof a !== 'string') {
    alert('Не строка');
    return;
  }
  a = a.trim();
  return a.length > 30 ? a.slice(0, 30) + '...' : a;
}
argum();
