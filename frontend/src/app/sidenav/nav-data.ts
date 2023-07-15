import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
{
  routeLink: 'dashborad',
  icon: 'fal fa-home',
  label: 'Dashboard'
},
// {
//   routeLink: 'Gestion des fichiers',
//   icon: 'fal fa-file',
//   label: 'Gestion de Fichiers'
// },
{
  routeLink: 'materiel',
  icon: 'fal fa-box-open',
  label: 'Gestion Materiel',

},
{
  routeLink: 'logiciel',
  icon: 'fal fa-award',
  label: 'Gestion Logiciel',
  // items: [
  //   {
  //     routeLink: 'produits/level 1.1',
  //     label: 'Ajout silde',

  //     },
  //     {
  //     routeLink: 'produits/level 2.3',
  //     label: 'Ajout plat',

  //     },
  //     {
  //       routeLink: 'produits/level 1.2',
  //       label: 'Historique'
  //     },

  //         ]

},
{
  routeLink: '../intervention',
  icon: 'fal fa-clipboard',
  label: 'liste Intervention'
},
{
  routeLink: '../reparation',
  icon: 'fal fa-clipboard',
  label: 'Gestion Reparations'
},
{
  routeLink: '../ticket',
  icon: 'fal fa-chart-bar',
  label: 'Gestion Ticket'
},
{
  routeLink: '../demande-intervention',
  icon: 'fal fa-clipboard',
  label: 'Demande intervention'
},
{
  routeLink: '../technicien',
  icon: 'fal fa-tags',
  label: 'Gestion Utilisateur',

},
{
  routeLink: '../rapport',
  icon: 'fal fa-school',
  label: 'Rapport Reparations'
},

{
  routeLink: '../liste-rapport',
  icon: 'fal fa-comment',
  label: 'liste de rapport'
},
{
  routeLink: 'settings',
  icon: 'fal fa-cog',
  label: 'Settings',
  expanded: false,
  items: [
    {
      routeLink: 'settings/profile',
      label: ' Langue'
    },
    {
      routeLink: 'settings/customer',
      label: ' Deconnexion'
    }

  ]

}

];
