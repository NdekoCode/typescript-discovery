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

// SI le type que l'on passe en paramètre possède une fonction "crie" alors retourne le type "U" sinon retourne le type "never"
type AnimalCry<T> = T extends { crie: () => infer U } ? U : never;
type A = AnimalCry<Chat>;
type B = AnimalCry<Poisson>
*/
class FeatureFlags {
    darkMode() { return true }
    privateMode() { return false }
    nsfwMode() { return true }
}
type OptionsFlags<T> = {
    [ key in keyof T ]: boolean
}
type A = OptionsFlags<FeatureFlags>