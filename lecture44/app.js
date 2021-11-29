const map = new Map();

map.set("age",18);

map.entries();

map.has("age");

map.get("age");


//weak map도 존재한다
//하지만 그렇게 유용하진 않다
//무언가를 참조하고 있지 않으면 garbage collector가 삭제해버린다