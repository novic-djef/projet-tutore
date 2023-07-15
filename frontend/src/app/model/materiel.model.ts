// export class Materiel {
//     id_materiel!: number;
//     modele!: String;
//     date_achat!: Date;
//     date_expiration_garantie!: Date;
//     emplacement!: String;
//     nom_materiel!: String;

//     }

export class Materiel {
    filter(arg0: (materiel: { id: number; }) => boolean) {
      throw new Error('Method not implemented.');
    }
    id!: number;
    nom!: String;
    marque!: String;
    image!: String;
    quantite!: number;
    createdAt!: Date;
    updateAt!: Date;
  

    }
