import { Routes } from '@angular/router';

// import { DashboardComponent } from '../../dashboard/dashboard.component';
// import { UserProfileComponent } from '../../user-profile/user-profile.component';
// import { TableListComponent } from '../../table-list/table-list.component';
// import { TypographyComponent } from '../../typography/typography.component';
// import { IconsComponent } from '../../icons/icons.component';
// import { MapsComponent } from '../../maps/maps.component';
// import { NotificationsComponent } from '../../notifications/notifications.component';
// import { UpgradeComponent } from '../../upgrade/upgrade.component';

// New Components
import { ActionPlanComponent } from '../../action-plan/action-plan.component';
import { ControlQuestionairesComponent,  } from '../../control-questionaires/control-questionaires.component';
import { FirstAidComponent } from '../../first-aid/first-aid.component';
import { QuizzComponent } from '../../quizz/quizz.component';

import { TestComponent } from '../../test/test.component';


export const AdminLayoutRoutes: Routes = [

    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },

    // Add New Components
    { path: 'action-plan',      component: ActionPlanComponent},
    { path: 'control-questionaires',   component: ControlQuestionairesComponent},
    { path: 'first-aid',        component: FirstAidComponent},
    { path: 'quizz',            component: QuizzComponent},
    { path: 'test',             component: TestComponent }
];
