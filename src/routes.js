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
const TemplateScene5 = React.lazy(() => import('./views/pages/Scenes/Scenes/Scene5'));
const TemplateScene6 = React.lazy(() => import('./views/pages/Scenes/Scenes/Scene6'));
const TemplateScene7 = React.lazy(() => import('./views/pages/Scenes/Scenes/Scene7'));
const TemplateScene8 = React.lazy(() => import('./views/pages/Scenes/Scenes/Scene8'));
const TemplateScene9 = React.lazy(() => import('./views/pages/Scenes/Scenes/Scene9'));
const TemplateScene10 = React.lazy(() => import('./views/pages/Scenes/Scenes/Scene10'));
const TemplateScene11 = React.lazy(() => import('./views/pages/Scenes/Scenes/Scene11'));
const TemplateScene12 = React.lazy(() => import('./views/pages/Scenes/Scenes/Scene12'));
const TemplateScene13 = React.lazy(() => import('./views/pages/Scenes/Scenes/Scene13'));
const TemplateScene14= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene14'));
const TemplateScene15= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene15'));
const TemplateScene16= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene16'));
const TemplateScene17= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene17'));
const TemplateScene18= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene18'));
const TemplateScene19= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene19'));
const TemplateScene20= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene20'));
const TemplateScene21= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene21'));
const TemplateScene22= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene22'));
const TemplateScene23= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene23'));
const TemplateScene24= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene24'));
const TemplateScene25= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene25'));
const TemplateScene26= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene26'));
const TemplateScene27= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene27'));
const TemplateScene28= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene28'))
const TemplateScene29= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene29'))
const TemplateScene30= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene30'))
const TemplateScene31= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene31'))
const TemplateScene32= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene32'))
const TemplateScene33= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene33'))
const TemplateScene34= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene34'))
const TemplateScene35= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene35'))
const TemplateScene36= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene36'))
const TemplateScene37= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene37'))
const TemplateScene38= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene38'))
const TemplateScene39= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene39'))
const TemplateScene40= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene40'))
const TemplateScene41= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene41'))
const TemplateScene42= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene42'))
const TemplateScene43= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene43'))
const TemplateScene44= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene44'))
const TemplateScene45= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene45'))
const TemplateScene46= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene46'))
const TemplateScene47= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene47'))
const TemplateScene48= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene48'))
const TemplateScene49= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene49'))
const TemplateScene50= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene50'))
const TemplateScene51= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene51'))
const TemplateScene52= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene52'))
const TemplateScene53= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene53'))
const TemplateScene54= React.lazy(() => import('./views/pages/Scenes/Scenes/Scene54'))

const AllScenesCategories = React.lazy(() => import('./views/pages/Category/AllCategories'));
const AddCategory = React.lazy(() => import('./views/pages/Category/AddCategory'));
const EditCategory = React.lazy(() => import('./views/pages/Category/EditCategory'));
const AllTemplates = React.lazy(() => import('./views/pages/Templates/AllTemplates'));
const AddTemplate = React.lazy(() => import('./views/pages/Templates/AddTemplate'));
const TemplatesStats = React.lazy(() => import('./views/users/ViewStats'));
const ViewStats = React.lazy(() => import('./views/pages/Templates/ViewStats'));

const AllTemplateCategories = React.lazy(() => import('./views/pages/TemplateCategory/AllCategories'));
const AddTemplateCategory = React.lazy(() => import('./views/pages/TemplateCategory/AddCategory'));
const EditTemplateCategory = React.lazy(() => import('./views/pages/TemplateCategory/EditCategory'));

const TemplateSceneOne = React.lazy(() => import('./views/pages/Templates/Scenes/Scene1'));
const TemplateSceneTwo = React.lazy(() => import('./views/pages/Templates/Scenes/Scene2'));
const TemplateSceneThree = React.lazy(() => import('./views/pages/Templates/Scenes/Scene3'));
const TemplateSceneFour= React.lazy(() => import('./views/pages/Templates/Scenes/Scene4'));
const TemplateSceneFive= React.lazy(() => import('./views/pages/Templates/Scenes/Scene5'));
const TemplateSceneSix= React.lazy(() => import('./views/pages/Templates/Scenes/Scene6'));
const TemplateSceneSeven= React.lazy(() => import('./views/pages/Templates/Scenes/Scene7'));
const TemplateSceneEight= React.lazy(() => import('./views/pages/Templates/Scenes/Scene8'))
const TemplateSceneNine= React.lazy(() => import('./views/pages/Templates/Scenes/Scene9'))
const TemplateSceneTen= React.lazy(() => import('./views/pages/Templates/Scenes/Scene10'))
const TemplateSceneEleven= React.lazy(() => import('./views/pages/Templates/Scenes/Scene11'))
const TemplateSceneThirteen= React.lazy(() => import('./views/pages/Templates/Scenes/Scene13'))
const TemplateSceneFourteen= React.lazy(() => import('./views/pages/Templates/Scenes/Scene14'))
const TemplateSceneFifteen= React.lazy(() => import('./views/pages/Templates/Scenes/Scene15'))
const TemplateSceneSixteen= React.lazy(() => import('./views/pages/Templates/Scenes/Scene16'))
const TemplateSceneSevenTeen= React.lazy(() => import('./views/pages/Templates/Scenes/Scene17'))
const TemplateSceneEighteen= React.lazy(() => import('./views/pages/Templates/Scenes/Scene18'))
const TemplateSceneNineteen = React.lazy(() => import('./views/pages/Templates/Scenes/Scene19'))
const TemplateSceneTwenty = React.lazy(() => import('./views/pages/Templates/Scenes/Scene20'))
const TemplateSceneTwentyOne = React.lazy(() => import('./views/pages/Templates/Scenes/Scene21'))
const TemplateSceneTwentyTwo = React.lazy(() => import('./views/pages/Templates/Scenes/Scene22'))
const TemplateSceneTwentyThree = React.lazy(() => import('./views/pages/Templates/Scenes/Scene23'))
const TemplateSceneTwentyFour = React.lazy(() => import('./views/pages/Templates/Scenes/Scene24'))
const TemplateSceneTwentyFive = React.lazy(() => import('./views/pages/Templates/Scenes/Scene25'))
const TemplateSceneTwentySix = React.lazy(() => import('./views/pages/Templates/Scenes/Scene26'))
const TemplateSceneTwentySeven = React.lazy(() => import('./views/pages/Templates/Scenes/Scene27'))
const TemplateSceneTwentyEight = React.lazy(() => import('./views/pages/Templates/Scenes/Scene28'))
const TemplateSceneTwentyNine = React.lazy(() => import('./views/pages/Templates/Scenes/Scene29'))
const TemplateSceneThirty = React.lazy(() => import('./views/pages/Templates/Scenes/Scene30'))
const TemplateSceneThirtyOne = React.lazy(() => import('./views/pages/Templates/Scenes/Scene31'))
const TemplateSceneThirtyTwo = React.lazy(() => import('./views/pages/Templates/Scenes/Scene32'))
const TemplateSceneThirtyThree = React.lazy(() => import('./views/pages/Templates/Scenes/Scene33'))
const TemplateSceneThirtyFour = React.lazy(() => import('./views/pages/Templates/Scenes/Scene34'))
const TemplateSceneThirtyFive = React.lazy(() => import('./views/pages/Templates/Scenes/Scene35'))
const TemplateSceneThirtySix = React.lazy(() => import('./views/pages/Templates/Scenes/Scene36'))
const TemplateSceneThirtySeven= React.lazy(() => import('./views/pages/Templates/Scenes/Scene37'))
const TemplateSceneThirtyEight= React.lazy(() => import('./views/pages/Templates/Scenes/Scene38'))
const TemplateSceneThirtyNine= React.lazy(() => import('./views/pages/Templates/Scenes/Scene39'))
const TemplateSceneFourty= React.lazy(() => import('./views/pages/Templates/Scenes/Scene40'))
const TemplateSceneFourtyOne= React.lazy(() => import('./views/pages/Templates/Scenes/Scene41'))
const TemplateSceneFourtyTwo= React.lazy(() => import('./views/pages/Templates/Scenes/Scene42'))
const TemplateSceneFourtyThree= React.lazy(() => import('./views/pages/Templates/Scenes/Scene43'))
const TemplateSceneFourtyFour= React.lazy(() => import('./views/pages/Templates/Scenes/Scene44'))
const TemplateSceneFourtyFive= React.lazy(() => import('./views/pages/Templates/Scenes/Scene45'))
const TemplateSceneFourtySix = React.lazy(() => import('./views/pages/Templates/Scenes/Scene46'))

const TemplateSceneFourtySeven = React.lazy(() => import('./views/pages/Templates/Scenes/Scene47'))
const TemplateSceneFourtyEight = React.lazy(() => import('./views/pages/Templates/Scenes/Scene48'))
const TemplateSceneFourtyNine = React.lazy(() => import('./views/pages/Templates/Scenes/Scene49'))
const TemplateSceneFifty = React.lazy(() => import('./views/pages/Templates/Scenes/Scene50'))


const TemplateSceneLast= React.lazy(() => import('./views/pages/Templates/Scenes/SceneLast'));
const EditTemplate= React.lazy(() => import('./views/pages/Templates/EditTemplate'));
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
  { path: '/viewstats/:id', exact: true, name: 'View Stats', component: TemplatesStats },
  { path: '/view-template-stats/:id', exact: true, name: 'View Stats', component: ViewStats },

  { path: '/add-user', exact: true,  name: 'Add User', component: AddUser },
  { path: '/profile', exact: true,  name: 'Profile', component: UserProfile },
  { path: '/all-Scenes', exact: true,  name: 'All Scenes', component: AllScenes },
  { path: '/edit-scene/1', exact: true,  name: 'Scene 1', component: TemplateNew1 },
  { path: '/edit-scene/2', exact: true,  name: 'Scene 2', component: TemplateScene2 },
  { path: '/edit-scene/3', exact: true,  name: 'Scene 3', component: TemplateScene3 },
  { path: '/edit-scene/4', exact: true,  name: 'Scene 4', component: TemplateScene4 },
  { path: '/edit-scene/5', exact: true,  name: 'Scene 5', component: TemplateScene5 },
  { path: '/edit-scene/6', exact: true,  name: 'Scene 6', component: TemplateScene6 },
  { path: '/edit-scene/7', exact: true,  name: 'Scene 7', component: TemplateScene7 },
  { path: '/edit-scene/8', exact: true,  name: 'Scene 8', component: TemplateScene8 },
  { path: '/edit-scene/9', exact: true,  name: 'Scene 9', component: TemplateScene9 },
  { path: '/edit-scene/10', exact: true,  name: 'Scene 10', component: TemplateScene10 },
  { path: '/edit-scene/11', exact: true,  name: 'Scene 11', component: TemplateScene11 }, 
  { path: '/edit-scene/12', exact: true,  name: 'Scene 12', component: TemplateScene12 }, 
  { path: '/edit-scene/13', exact: true,  name: 'Scene 13', component: TemplateScene13 }, 
  { path: '/edit-scene/14', exact: true,  name: 'Scene 14', component: TemplateScene14 }, 
  { path: '/edit-scene/15', exact: true,  name: 'Scene 15', component: TemplateScene15 }, 
  { path: '/edit-scene/16', exact: true,  name: 'Scene 16', component: TemplateScene16 }, 
  { path: '/edit-scene/17', exact: true,  name: 'Scene 17', component: TemplateScene17 },
  { path: '/edit-scene/18', exact: true,  name: 'Scene 17', component: TemplateScene18 },
  { path: '/edit-scene/19', exact: true,  name: 'Scene 19', component: TemplateScene19 },
  { path: '/edit-scene/20', exact: true,  name: 'Scene 20', component: TemplateScene20 },
  { path: '/edit-scene/21', exact: true,  name: 'Scene 21', component: TemplateScene21 },
  { path: '/edit-scene/22', exact: true,  name: 'Scene 22', component: TemplateScene22 },
  { path: '/edit-scene/23', exact: true,  name: 'Scene 23', component: TemplateScene23 },
  { path: '/edit-scene/24', exact: true,  name: 'Scene 24', component: TemplateScene24 },
  { path: '/edit-scene/25', exact: true,  name: 'Scene 25', component: TemplateScene25 },
  { path: '/edit-scene/26', exact: true,  name: 'Scene 26', component: TemplateScene26 },
  { path: '/edit-scene/27', exact: true,  name: 'Scene 27', component: TemplateScene27 },
  { path: '/edit-scene/28', exact: true,  name: 'Scene 28', component: TemplateScene28 },
  { path: '/edit-scene/29', exact: true,  name: 'Scene 29', component: TemplateScene29 },
  { path: '/edit-scene/30', exact: true,  name: 'Scene 30', component: TemplateScene30 },
  { path: '/edit-scene/31', exact: true,  name: 'Scene 31', component: TemplateScene31 },
  { path: '/edit-scene/32', exact: true,  name: 'Scene 32', component: TemplateScene32 },
  { path: '/edit-scene/33', exact: true,  name: 'Scene 33', component: TemplateScene33 },
  { path: '/edit-scene/34', exact: true,  name: 'Scene 34', component: TemplateScene34 },
  { path: '/edit-scene/35', exact: true,  name: 'Scene 35', component: TemplateScene35 },
  { path: '/edit-scene/36', exact: true,  name: 'Scene 36', component: TemplateScene36 },
  { path: '/edit-scene/37', exact: true,  name: 'Scene 37', component: TemplateScene37 },
  { path: '/edit-scene/38', exact: true,  name: 'Scene 38', component: TemplateScene38 },
  { path: '/edit-scene/39', exact: true,  name: 'Scene 39', component: TemplateScene39 },
  { path: '/edit-scene/40', exact: true,  name: 'Scene 40', component: TemplateScene40 },
  { path: '/edit-scene/41', exact: true,  name: 'Scene 41', component: TemplateScene41 },
  { path: '/edit-scene/42', exact: true,  name: 'Scene 42', component: TemplateScene42 },
  { path: '/edit-scene/43', exact: true,  name: 'Scene 43', component: TemplateScene43 },
  { path: '/edit-scene/44', exact: true,  name: 'Scene 43', component: TemplateScene44 },
  { path: '/edit-scene/45', exact: true,  name: 'Scene 45', component: TemplateScene45 },
  { path: '/edit-scene/46', exact: true,  name: 'Scene 46', component: TemplateScene46 },
  { path: '/edit-scene/47', exact: true,  name: 'Scene 47', component: TemplateScene47 },
  { path: '/edit-scene/48', exact: true,  name: 'Scene 48', component: TemplateScene48 },
  { path: '/edit-scene/49', exact: true,  name: 'Scene 49', component: TemplateScene49 },
  { path: '/edit-scene/50', exact: true,  name: 'Scene 50', component: TemplateScene50 },
  { path: '/edit-scene/51', exact: true,  name: 'Scene 51', component: TemplateScene51 },
  { path: '/edit-scene/52', exact: true,  name: 'Scene 52', component: TemplateScene52 },
  { path: '/edit-scene/53', exact: true,  name: 'Scene 53', component: TemplateScene53 },
  { path: '/edit-scene/54', exact: true,  name: 'Scene 54', component: TemplateScene54},
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
  { path: '/template/:id/5/:sceneid', exact: true,  name: 'Scene 5', component: TemplateSceneFive },
  { path: '/template/:id/6/:sceneid', exact: true,  name: 'Scene 6', component: TemplateSceneSix },
  { path: '/template/:id/7/:sceneid', exact: true,  name: 'Scene 6', component: TemplateSceneSeven },
  { path: '/template/:id/8/:sceneid', exact: true,  name: 'Scene 8', component: TemplateSceneEight },
  { path: '/template/:id/9/:sceneid', exact: true,  name: 'Scene 9', component: TemplateSceneNine },
  { path: '/template/:id/10/:sceneid', exact: true,  name: 'Scene 10', component: TemplateSceneTen },
  { path: '/template/:id/11/:sceneid', exact: true,  name: 'Scene 11', component: TemplateSceneEleven },
  { path: '/template/:id/13/:sceneid', exact: true,  name: 'Scene 13', component: TemplateSceneThirteen },
  { path: '/template/:id/14/:sceneid', exact: true,  name: 'Scene 14', component: TemplateSceneFourteen },
  { path: '/template/:id/15/:sceneid', exact: true,  name: 'Scene 15', component: TemplateSceneFifteen },
  { path: '/template/:id/16/:sceneid', exact: true,  name: 'Scene 16', component: TemplateSceneSixteen },
  { path: '/template/:id/17/:sceneid', exact: true,  name: 'Scene 17', component: TemplateSceneSevenTeen },
  { path: '/template/:id/18/:sceneid', exact: true,  name: 'Scene 18', component: TemplateSceneEighteen },
  { path: '/template/:id/19/:sceneid', exact: true,  name: 'Scene 19', component: TemplateSceneNineteen },
  { path: '/template/:id/20/:sceneid', exact: true,  name: 'Scene 20', component: TemplateSceneTwenty },
  { path: '/template/:id/21/:sceneid', exact: true,  name: 'Scene 21', component: TemplateSceneTwentyOne },
  { path: '/template/:id/22/:sceneid', exact: true,  name: 'Scene 22', component: TemplateSceneTwentyTwo },
  { path: '/template/:id/23/:sceneid', exact: true,  name: 'Scene 23', component: TemplateSceneTwentyThree },
  { path: '/template/:id/24/:sceneid', exact: true,  name: 'Scene 24', component: TemplateSceneTwentyFour },
  { path: '/template/:id/25/:sceneid', exact: true,  name: 'Scene 25', component: TemplateSceneTwentyFive },
  { path: '/template/:id/26/:sceneid', exact: true,  name: 'Scene 26', component: TemplateSceneTwentySix },
  { path: '/template/:id/27/:sceneid', exact: true,  name: 'Scene 27', component: TemplateSceneTwentySeven },
  { path: '/template/:id/28/:sceneid', exact: true,  name: 'Scene 28', component: TemplateSceneTwentyEight },
  { path: '/template/:id/29/:sceneid', exact: true,  name: 'Scene 29', component: TemplateSceneTwentyNine },
  { path: '/template/:id/30/:sceneid', exact: true,  name: 'Scene 30', component: TemplateSceneThirty },
  { path: '/template/:id/31/:sceneid', exact: true,  name: 'Scene 31', component: TemplateSceneThirtyOne },
  { path: '/template/:id/32/:sceneid', exact: true,  name: 'Scene 32', component: TemplateSceneThirtyTwo },
  { path: '/template/:id/33/:sceneid', exact: true,  name: 'Scene 32', component: TemplateSceneThirtyThree },
  { path: '/template/:id/34/:sceneid', exact: true,  name: 'Scene 32', component: TemplateSceneThirtyFour },
  { path: '/template/:id/35/:sceneid', exact: true,  name: 'Scene 32', component: TemplateSceneThirtyFive },
  { path: '/template/:id/36/:sceneid', exact: true,  name: 'Scene 32', component: TemplateSceneThirtySix },
  { path: '/template/:id/37/:sceneid', exact: true,  name: 'Scene 37', component: TemplateSceneThirtySeven },
  { path: '/template/:id/38/:sceneid', exact: true,  name: 'Scene 37', component: TemplateSceneThirtyEight },
  { path: '/template/:id/39/:sceneid', exact: true,  name: 'Scene 39', component: TemplateSceneThirtyNine },
  { path: '/template/:id/40/:sceneid', exact: true,  name: 'Scene 40', component: TemplateSceneFourty },
  { path: '/template/:id/41/:sceneid', exact: true,  name: 'Scene 41', component: TemplateSceneFourtyOne },
  { path: '/template/:id/42/:sceneid', exact: true,  name: 'Scene 42', component: TemplateSceneFourtyTwo },
  { path: '/template/:id/43/:sceneid', exact: true,  name: 'Scene 43', component: TemplateSceneFourtyThree },
  { path: '/template/:id/44/:sceneid', exact: true,  name: 'Scene 44', component: TemplateSceneFourtyFour },
  { path: '/template/:id/45/:sceneid', exact: true,  name: 'Scene 45', component: TemplateSceneFourtyFive },
  { path: '/template/:id/46/:sceneid', exact: true,  name: 'Scene 46', component: TemplateSceneFourtySix },
  { path: '/template/:id/47/:sceneid', exact: true,  name: 'Scene 47', component: TemplateSceneFourtySeven },
  { path: '/template/:id/48/:sceneid', exact: true,  name: 'Scene 48', component: TemplateSceneFourtyEight },
  { path: '/template/:id/49/:sceneid', exact: true,  name: 'Scene 49', component: TemplateSceneFourtyNine },
  { path: '/template/:id/50/:sceneid', exact: true,  name: 'Scene 50', component: TemplateSceneFifty },

  { path: '/template/:id/last/:sceneid', exact: true,  name: 'Scene 4', component: TemplateSceneLast },
  { path: '/my-videos/', exact: true,  name: 'Scene 4', component: MyVideos },
  { path: '/export-video/:templateId/download/', exact: true,  name: 'Export Video', component: ExportVideo },
  { path: '/edit-template/:templateId/', exact: true,  name: 'Edit Template', component: EditTemplate }
];

export default routes;
