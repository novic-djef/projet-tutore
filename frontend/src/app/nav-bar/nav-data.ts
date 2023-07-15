import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
{
  routeLink: 'dashboard',
  icon: 'fal fa-home',
  label: 'Dashboard'
},
{
  routeLink: 'produits',
  icon: 'fal fa-box-open',
  label: 'Produits',
  items: [
    {
      routeLink: 'produits/level 1.1',
      label: 'Ajout silde',

      },
      {
      routeLink: 'produits/level 2.3',
      label: 'Ajout plat',

      },
      {
        routeLink: 'produits/level 1.2',
        label: 'historique'
      },

          ]

},
{
  routeLink: 'statistique',
  icon: 'fal fa-chart-bar',
  label: 'Statistique'
},
{
  routeLink: 'coupens',
  icon: 'fal fa-tags',
  label: 'Coupens',
  items: [
    {
      routeLink: 'coupens/create',
      label: ' create'
    },
    {
      routeLink: 'coupens/list',
      label: 'list'
    }

  ]

},
{
  routeLink: 'pages',
  icon: 'fal fa-file',
  label: 'Pages'
},
{
  routeLink: 'media',
  icon: 'fal fa-camera',
  label: 'Media'
},
{
  routeLink: 'settings',
  icon: 'fal fa-cog',
  label: 'Settings',
  expanded: false,
  items: [
    {
      routeLink: 'settings/profile',
      label: ' profile'
    },
    {
      routeLink: 'settings/customer',
      label: ' customer'
    }

  ]

}

];
