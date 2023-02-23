class Poisson {
    crie() {
        return false;
    }
}
class Chat {
    crie() {
        return 'miaou';
    }
}

/* 


type nager = { nager: any }
type sauter = { sauter: any }
type AnimalOptions = nager | sauter
type AnimalFromOptions<T> = T extends nager ? Poisson : Chat;

function generator<T extends AnimalOptions>(options: T): AnimalFromOptions<T> {
    if ("nager" in options) {
        return new Poisson();
    }
    return new Chat();
}

const a = generator({ sauter: 'an' });
*/
