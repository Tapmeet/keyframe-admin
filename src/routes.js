import React from 'react';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const AddUser = React.lazy(() => import('./views/users/AddUser'));
const UserProfile = React.lazy(() => import('./views/users/UserProfile'));
const AllScenes = React.lazy(() => import('./views/pages/Scenes/AllScenes/AllScenes'));
const TemplateNew1 = React.lazy(() => import('./views/pages/Scenes/Scenes/Scene1'));
const TemplateScene2 = React.lazy(() => import('./views/pages/Scenes/Scenes/Scene2'));
const TemplateScene3 = React.lazy(() => import('./views/pages/Scenes/Scenes/Scene3'));
const TemplateScene4 = React.lazy(() => import('./views/pages/Scenes/Scenes/Scene4'));
const AllScenesCategories = React.lazy(() => import('./views/pages/Category/AllCategories'));
const AddCategory = React.lazy(() => import('./views/pages/Category/AddCategory'));
const EditCategory = React.lazy(() => import('./views/pages/Category/EditCategory'));
const AllTemplates = React.lazy(() => import('./views/pages/Templates/AllTemplates'));
const AddTemplate = React.lazy(() => import('./views/pages/Templates/AddTemplate'));

const AllTemplateCategories = React.lazy(() => import('./views/pages/TemplateCategory/AllCategories'));
const AddTemplateCategory = React.lazy(() => import('./views/pages/TemplateCategory/AddCategory'));
const EditTemplateCategory = React.lazy(() => import('./views/pages/TemplateCategory/EditCategory'));

const TemplateSceneOne = React.lazy(() => import('./views/pages/Templates/Scenes/Scene1'));
const TemplateSceneTwo = React.lazy(() => import('./views/pages/Templates/Scenes/Scene2'));
const TemplateSceneThree = React.lazy(() => import('./views/pages/Templates/Scenes/Scene3'));
const TemplateSceneFour= React.lazy(() => import('./views/pages/Templates/Scenes/Scene4'));
const TemplateSceneLast= React.lazy(() => import('./views/pages/Templates/Scenes/SceneLast'));
const MyVideos= React.lazy(() => import('./views/pages/MyVideos'));
const ExportVideo= React.lazy(() => import('./views/pages/ExportVideo'));
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/add-user', exact: true,  name: 'Add User', component: AddUser },
  { path: '/profile', exact: true,  name: 'Profile', component: UserProfile },
  { path: '/all-Scenes', exact: true,  name: 'All Scenes', component: AllScenes },
  { path: '/edit-scene/1', exact: true,  name: 'Scene 1', component: TemplateNew1 },
  { path: '/edit-scene/2', exact: true,  name: 'Scene 2', component: TemplateScene2 },
  { path: '/edit-scene/3', exact: true,  name: 'Scene 3', component: TemplateScene3 },
  { path: '/edit-scene/4', exact: true,  name: 'Scene 4', component: TemplateScene4 },
  
  { path: '/scene-categories', exact: true,  name: 'Categories', component: AllScenesCategories },
  { path: '/add-category', exact: true,  name: 'Add Category', component: AddCategory },
  { path: '/edit-category/:id', exact: true, name: 'Edit Category', component: EditCategory },
  { path: '/all-templates', exact: true,  name: 'All Templates', component: AllTemplates },
  { path: '/add-template', exact: true,  name: 'Add Template', component: AddTemplate },

  { path: '/template-categories', exact: true,  name: 'Categories', component: AllTemplateCategories },
  { path: '/add-template-category', exact: true,  name: 'Add Category', component: AddTemplateCategory },
  { path: '/edit-template-category/:id', exact: true, name: 'Edit Category', component: EditTemplateCategory },

  { path: '/template/:id/1/:sceneid', exact: true,  name: 'Scene 1', component: TemplateSceneOne },
  { path: '/template/:id/2/:sceneid', exact: true,  name: 'Scene 2', component: TemplateSceneTwo },
  { path: '/template/:id/3/:sceneid', exact: true,  name: 'Scene 3', component: TemplateSceneThree },
  { path: '/template/:id/4/:sceneid', exact: true,  name: 'Scene 4', component: TemplateSceneFour },
  { path: '/template/:id/last/:sceneid', exact: true,  name: 'Scene 4', component: TemplateSceneLast },
  { path: '/my-videos/', exact: true,  name: 'Scene 4', component: MyVideos },
  { path: '/export-video/:templateId/download/', exact: true,  name: 'Export Video', component: ExportVideo }
];

export default routes;
