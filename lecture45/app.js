//generater은 기본함수를 pause 할수있는 함수이다

function* listPeople() {
    yield "jeong";
    yield "yuzhu";
}

const listG = listPeople();


const friends = ["Dal","Flynn","Mark","Jeong","Yuzhu"];

function* friendTeller() {
    for(const friend of friends) {
        yield friend;
    }
}

const friendLopper = friendTeller();