# TypeScript

L'Objectif est de voir les bases du langage **TypeScript** mais aussi de voir des trucs et astuces pour mieux l'utiliser

## Prérequis

- Être à l'aise avec JavaScript (ES6, Import...)
- NPM et l'environnement Node.js

## Qu'est-ce que TypeScript

TypeScript c'est un superset du **JavaScript**, c'est le langage **JavaScript** sur lequel on a rajouté des options supplémentaires et donc le TypeScript c'est du **JavaScript** avec des types statiques, donc par là il faut entendre que l'on a des petites annotations sur les types.

```{TS}
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}
 
function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

Il faut savoir que le **TypeScript** ne va pas être directement exécuté sur nos environnements, que ce soit le navigateur ou node.js, ce qu'il va falloir faire c'est convertir le code **TypeScript** en **JavaScript** et c'est la cible principale qui a été penser pour le **TypeScript**.
Donc finalement le code qui sera exécuté sur votre navigateur ou sur votre environnement `node.js`, ça sera du code **JavaScript** à partir de ça il faut comprendre que *la vérification de type sera à la **compilation** du code TypeScript et non à l'exécution du code JavaScript*.

## Pourquoi utiliser le TypeScript ?

- Le premier avantage est que ça va permettre de limiter les erreurs surtout les erreurs du type: `Uncaught TypeError: Cannot read properties of undefined (reading 'toLowerCase')`, c'est le genre d'erreur que l'on a lorsqu'une fonction reçois un objet qui n'a pas la forme que nous on attendait, on essaie ensuite d'accédé à une propriété qui n'existe pas. Ces genres d'erreurs **TypeScript** serait capable de les capturer en amont avant même que notre code soit exécuté.
- Une autre type d'erreur que l'on peut rencontrer c'est sont par exemple des petites fautes d'inattention surtout lors des calculs mathématiques.
- TypeScript permet aussi une meilleure autocomplétion et documentation et qui est bien plus poussée que la JSDoc car nos éditeurs utilisent les fichiers TypeScript pour documenter les fonctions de base telle que les fonctions du DOM ou les fonctions node.js
- Le TypeScript permet d'avoir une cible plus simple, même si le JavaScript n'arrête pas d'évoluer, le TypeScript peut être converti en `ES3`, `ES5`,... jusqu'à de `ESNext` donc l'avantage quand on écrira du code `TypeScript`, on se contentera de cibler une version spécifique du JavaScript et ensuite on pourra lui demander d'exporter comme on le souhaite et cela va permettre de se passer des outils comme `babel` et de simplifier un peu le travail.

- On peut utiliser TypeScript à différent niveau
  - On peut choisir d'avoir TypeScript qui va simplement vérifier notre code et pour cela il faut ajouter `@ts-check` au-dessus de votre code, dans ce cas il va afficher les erreurs dans votre éditeur ![Ts-CHUCK](assets/img/ts-check.png)
  - Ou créer des fichiers TypeScript qui seront par la suite compiler en fichier JavaScript.

## Comment utiliser TypeScript

Pour exécuter du TypeScript il faudra le convertir en JavaScript, et pour cela on a deux outils :

- On a le `checker`, qui va permettre de valider votre code, mais la plupart des éditeurs modernes comme VScode intégrer déjà ces outils-là, voilà pourquoi quand vous aurez des erreurs dans votre code ils seront directement détecté et souligner, donc cette étape de vérification on peut le laisser coté éditeur.
- Ensuite on a une partie `compiler` qui prend votre code TypeScript et le convertir en JavaScript en retirant les types, mais rien vérifier du tout.

### Outils

Pour les outils d'utilisations pour
Conversion en JavaScript on a :

- TypeScript (tsc)
- Webpack (TS-loader)
- Parcel
- ESBuild
- Vite (via ESBuild)

## Installation et Utilisation

Pour installer TypeScript il faut le faire en utilisant `npm` on a `npm install typescript --save-dev` et `pnpm` avec `pnpm add typescript -D`.

Pour maintenant utiliser le TypeScript il faut utiliser des fichiers avec une extension `.ts` comme par exemple `app.ts` et à l'intérieur de ces fichiers on y écrit du code TypeScript.
Une fois que l'on a écrit notre code TypeScript il faut maintenant le compiler en fichier JavaScript et pour cela on utilise la commande `npx tsc LeNomDuFichier-A-Compiler.ts`; et si vous voulez dans cette ligne de commande on peut utiliser pas mal d'argument pour aller encore plus loin, par exemple ajouter un watcher qui va écouter le changement sur notre fichier TypeScript et le compiler à chaque détection d'un changement avec `npx tsc LeNomDuFichier-A-Compiler.ts --watch` ou en spécifiant le dossier ou doit se faire la compilation avec `npx tsc LeNomDuFichier-A-Compiler.ts --outDir leDossierOuOnVaCompiler` et pour éviter de répéter ce drapeau, ce que l'on va faire c'est créer un fichier de configuration appeler `tsconfig.json` qui va contenir maintenant l'ensemble des règles que l'on veut respecter à la compilation, ce fichier est ecrit en format JSON et contient les regles de la forme suivante :

```{JSON}
// Contient les informations pour compiler le projet
{
    "compilerOptions": {
        // Le dossier de sortie de nos fichier javascript
        "outDir": "dist",
        // La version javascript qu'on cible
        "target": "ES2015",
        // Compile le code que si il n'y a pas d'erreur, ainsi ça nous permet de vous rassurer que le fichier JS compiler ou generer ne contient pas d'erreur
        "noEmitOnError": true,
        "strict": true,
        // On ecoute à chaque fois qu'il y a des modifications
        "watch": true
    },
    // Le fichier à inclure dans le  programme
    "files": [
        "./src/app.ts"
    ]
}
```

## Syntaxe de base

Dans la syntaxe de base on va voir beaucoup plus sur les types de variable et comment les utiliser ainsi que les différentes variations.

### Type de variable

Pour déclarer les types de variables il suffit d'utiliser un deux point ":" devant le nom de la variable suivi du type que l'on souhaite utiliser  et puis on egalise de sa valeur initial si on veut

```{TS}
const greet:string = "Hello world";
const nbrZero:number = 0;
const isBooleanVal:boolean = false;
const nullVal:null = null;
const anArrayOfString:string[] = ['lol','Bum'];
const allTypesYouWant: any = [ "Abel", { user: { username: "Lolo" } }, "Gloire", 3, false ];
```

⚠ Le type `any` ça permet de dire n'importe quoi, c'est un type un petit peu fourtout et c'est un type que l'on evitera au maximum d'utiliser, `any` vous pouvez le mettre n'importe où mais c'est un type qui est un peu trop gros car quand vous utilisez cela veut dire que vous ne connaissez pas la forme de cette variable et que tout au long de l'execution vous n'avez aucune idée de ce qu'il y a dedans donc ce n'est pas très très pratique.

Sachez que vous pouvez aussi preciser la forme des objets en utilisant une syntaxe ressemblant un peu à une syntaxe objet et pour cela on créer une variable encore et puis un deux point ":" devant son nom suivis d'un objet qui va decrire l'objet en question et cela se fait en mettant sur chaque clé d'un objet on lui met deux point son type.

```{TS}

const user:{username:string,firstname:string,lastname:string} = {username:'',firstname:"",lastname:''};
// Si votre objet a une infinité de clé vous pouvez aussi le decrire comme suit
const user:{username:string,firstname:string,lastname:string,[key:string]:string} = {username:'',firstname:"",lastname:''};

```

Pour des objets qui correspondent à des types spécifiques vous pouvez simplement mettre le nom de l'objet:

```{TS}
const date:Date = new Date()

```

### Typage des fonctions

Le typage des fonctions c'est comme pour les variable, c'est à dire le nom de la fonction puis son type qui est `Function` avec:

```{TS}
const cb:Function = ()=>{
    
}
// Pour les paramètres des fonctions c'est le meme principe que pour le type de variable
const cbTest:Function = (e:MouseEvent)=>{
}
function printId(id:number):void {

}
// J'attends une fonction qui prend en paramètre un element de type MouseEvent et qui ne retourne rien
const whenUserClick:(e:MouseEvent)=>void = (e)=>{

}

```

⚠ Quand vous utilisez le mot clé `void` cela veut dire que le retour ne sera pas utilisé, mais si vous avez une fonction void qui retourne quelque chose et que vous utilisez la valeur retourner, dans ce cas cela va générer une erreur.
