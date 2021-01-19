import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'r1',
    loadChildren: () => import('./r1/r1.module').then((m) => m.R1Module),
  },
  {
    path: 'r2',
    loadChildren: () => import('./r2/r2.module').then((m) => m.R2Module),
  },
  {
    path: 'r3',
    loadChildren: () => import('./r3/r3.module').then((m) => m.R3Module),
  },
  {
    path: 'r4',
    loadChildren: () => import('./r4/r4.module').then((m) => m.R4Module),
  },
  {
    path: 'r5',
    loadChildren: () => import('./r5/r5.module').then((m) => m.R5Module),
  },
  {
    path: 'r6',
    loadChildren: () => import('./r6/r6.module').then((m) => m.R6Module),
  },
  {
    path: 'r7',
    loadChildren: () => import('./r7/r7.module').then((m) => m.R7Module),
  },
  {
    path: 'r8',
    loadChildren: () => import('./r8/r8.module').then((m) => m.R8Module),
  },
  {
    path: 'r9',
    loadChildren: () => import('./r9/r9.module').then((m) => m.R9Module),
  },
  {
    path: 'r10',
    loadChildren: () => import('./r10/r10.module').then((m) => m.R10Module),
  },
  {
    path: 'r11',
    loadChildren: () => import('./r11/r11.module').then((m) => m.R11Module),
  },
  {
    path: 'r12',
    loadChildren: () => import('./r12/r12.module').then((m) => m.R12Module),
  },
  {
    path: 'r13',
    loadChildren: () => import('./r13/r13.module').then((m) => m.R13Module),
  },
  {
    path: 'r14',
    loadChildren: () => import('./r14/r14.module').then((m) => m.R14Module),
  },
  {
    path: 'r15',
    loadChildren: () => import('./r15/r15.module').then((m) => m.R15Module),
  },
  {
    path: 'r16',
    loadChildren: () => import('./r16/r16.module').then((m) => m.R16Module),
  },
  {
    path: 'r17',
    loadChildren: () => import('./r17/r17.module').then((m) => m.R17Module),
  },
  {
    path: 'r18',
    loadChildren: () => import('./r18/r18.module').then((m) => m.R18Module),
  },
  {
    path: 'r19',
    loadChildren: () => import('./r19/r19.module').then((m) => m.R19Module),
  },
  {
    path: 'r20',
    loadChildren: () => import('./r20/r20.module').then((m) => m.R20Module),
  },
  {
    path: 'r21',
    loadChildren: () => import('./r21/r21.module').then((m) => m.R21Module),
  },
  {
    path: 'r22',
    loadChildren: () => import('./r22/r22.module').then((m) => m.R22Module),
  },
  {
    path: 'r23',
    loadChildren: () => import('./r23/r23.module').then((m) => m.R23Module),
  },
  {
    path: 'r24',
    loadChildren: () => import('./r24/r24.module').then((m) => m.R24Module),
  },
  {
    path: 'r25',
    loadChildren: () => import('./r25/r25.module').then((m) => m.R25Module),
  },
  {
    path: 'r26',
    loadChildren: () => import('./r26/r26.module').then((m) => m.R26Module),
  },
  {
    path: 'r27',
    loadChildren: () => import('./r27/r27.module').then((m) => m.R27Module),
  },
  {
    path: 'r28',
    loadChildren: () => import('./r28/r28.module').then((m) => m.R28Module),
  },
  {
    path: 'r29',
    loadChildren: () => import('./r29/r29.module').then((m) => m.R29Module),
  },
  {
    path: 'r30',
    loadChildren: () => import('./r30/r30.module').then((m) => m.R30Module),
  },
  {
    path: 'r31',
    loadChildren: () => import('./r31/r31.module').then((m) => m.R31Module),
  },
  {
    path: 'r32',
    loadChildren: () => import('./r32/r32.module').then((m) => m.R32Module),
  },
  {
    path: 'r33',
    loadChildren: () => import('./r33/r33.module').then((m) => m.R33Module),
  },
  {
    path: 'r34',
    loadChildren: () => import('./r34/r34.module').then((m) => m.R34Module),
  },
  {
    path: 'r35',
    loadChildren: () => import('./r35/r35.module').then((m) => m.R35Module),
  },
  {
    path: 'r36',
    loadChildren: () => import('./r36/r36.module').then((m) => m.R36Module),
  },
  {
    path: 'r37',
    loadChildren: () => import('./r37/r37.module').then((m) => m.R37Module),
  },
  {
    path: 'r38',
    loadChildren: () => import('./r38/r38.module').then((m) => m.R38Module),
  },
  {
    path: 'r39',
    loadChildren: () => import('./r39/r39.module').then((m) => m.R39Module),
  },
  {
    path: 'r40',
    loadChildren: () => import('./r40/r40.module').then((m) => m.R40Module),
  },
  {
    path: 'r41',
    loadChildren: () => import('./r41/r41.module').then((m) => m.R41Module),
  },
  {
    path: 'r42',
    loadChildren: () => import('./r42/r42.module').then((m) => m.R42Module),
  },
  {
    path: 'r43',
    loadChildren: () => import('./r43/r43.module').then((m) => m.R43Module),
  },
  {
    path: 'r44',
    loadChildren: () => import('./r44/r44.module').then((m) => m.R44Module),
  },
  {
    path: 'r45',
    loadChildren: () => import('./r45/r45.module').then((m) => m.R45Module),
  },
  {
    path: 'r46',
    loadChildren: () => import('./r46/r46.module').then((m) => m.R46Module),
  },
  {
    path: 'r47',
    loadChildren: () => import('./r47/r47.module').then((m) => m.R47Module),
  },
  {
    path: 'r48',
    loadChildren: () => import('./r48/r48.module').then((m) => m.R48Module),
  },
  {
    path: 'r49',
    loadChildren: () => import('./r49/r49.module').then((m) => m.R49Module),
  },
  {
    path: 'r50',
    loadChildren: () => import('./r50/r50.module').then((m) => m.R50Module),
  },
  {
    path: 'r51',
    loadChildren: () => import('./r51/r51.module').then((m) => m.R51Module),
  },
  {
    path: 'r52',
    loadChildren: () => import('./r52/r52.module').then((m) => m.R52Module),
  },
  {
    path: 'r53',
    loadChildren: () => import('./r53/r53.module').then((m) => m.R53Module),
  },
  {
    path: 'r54',
    loadChildren: () => import('./r54/r54.module').then((m) => m.R54Module),
  },
  {
    path: 'r55',
    loadChildren: () => import('./r55/r55.module').then((m) => m.R55Module),
  },
  {
    path: 'r56',
    loadChildren: () => import('./r56/r56.module').then((m) => m.R56Module),
  },
  {
    path: 'r57',
    loadChildren: () => import('./r57/r57.module').then((m) => m.R57Module),
  },
  {
    path: 'r58',
    loadChildren: () => import('./r58/r58.module').then((m) => m.R58Module),
  },
  {
    path: 'r59',
    loadChildren: () => import('./r59/r59.module').then((m) => m.R59Module),
  },
  {
    path: 'r60',
    loadChildren: () => import('./r60/r60.module').then((m) => m.R60Module),
  },
  {
    path: 'r61',
    loadChildren: () => import('./r61/r61.module').then((m) => m.R61Module),
  },
  {
    path: 'r62',
    loadChildren: () => import('./r62/r62.module').then((m) => m.R62Module),
  },
  {
    path: 'r63',
    loadChildren: () => import('./r63/r63.module').then((m) => m.R63Module),
  },
  {
    path: 'r64',
    loadChildren: () => import('./r64/r64.module').then((m) => m.R64Module),
  },
  {
    path: 'r65',
    loadChildren: () => import('./r65/r65.module').then((m) => m.R65Module),
  },
  {
    path: 'r66',
    loadChildren: () => import('./r66/r66.module').then((m) => m.R66Module),
  },
  {
    path: 'r67',
    loadChildren: () => import('./r67/r67.module').then((m) => m.R67Module),
  },
  {
    path: 'r68',
    loadChildren: () => import('./r68/r68.module').then((m) => m.R68Module),
  },
  {
    path: 'r69',
    loadChildren: () => import('./r69/r69.module').then((m) => m.R69Module),
  },
  {
    path: 'r70',
    loadChildren: () => import('./r70/r70.module').then((m) => m.R70Module),
  },
  {
    path: 'r71',
    loadChildren: () => import('./r71/r71.module').then((m) => m.R71Module),
  },
  {
    path: 'r72',
    loadChildren: () => import('./r72/r72.module').then((m) => m.R72Module),
  },
  {
    path: 'r73',
    loadChildren: () => import('./r73/r73.module').then((m) => m.R73Module),
  },
  {
    path: 'r74',
    loadChildren: () => import('./r74/r74.module').then((m) => m.R74Module),
  },
  {
    path: 'r75',
    loadChildren: () => import('./r75/r75.module').then((m) => m.R75Module),
  },
  {
    path: 'r76',
    loadChildren: () => import('./r76/r76.module').then((m) => m.R76Module),
  },
  {
    path: 'r77',
    loadChildren: () => import('./r77/r77.module').then((m) => m.R77Module),
  },
  {
    path: 'r78',
    loadChildren: () => import('./r78/r78.module').then((m) => m.R78Module),
  },
  {
    path: 'r79',
    loadChildren: () => import('./r79/r79.module').then((m) => m.R79Module),
  },
  {
    path: 'r80',
    loadChildren: () => import('./r80/r80.module').then((m) => m.R80Module),
  },
  {
    path: 'r81',
    loadChildren: () => import('./r81/r81.module').then((m) => m.R81Module),
  },
  {
    path: 'r82',
    loadChildren: () => import('./r82/r82.module').then((m) => m.R82Module),
  },
  {
    path: 'r83',
    loadChildren: () => import('./r83/r83.module').then((m) => m.R83Module),
  },
  {
    path: 'r84',
    loadChildren: () => import('./r84/r84.module').then((m) => m.R84Module),
  },
  {
    path: 'r85',
    loadChildren: () => import('./r85/r85.module').then((m) => m.R85Module),
  },
  {
    path: 'r86',
    loadChildren: () => import('./r86/r86.module').then((m) => m.R86Module),
  },
  {
    path: 'r87',
    loadChildren: () => import('./r87/r87.module').then((m) => m.R87Module),
  },
  {
    path: 'r88',
    loadChildren: () => import('./r88/r88.module').then((m) => m.R88Module),
  },
  {
    path: 'r89',
    loadChildren: () => import('./r89/r89.module').then((m) => m.R89Module),
  },
  {
    path: 'r90',
    loadChildren: () => import('./r90/r90.module').then((m) => m.R90Module),
  },
  {
    path: 'r91',
    loadChildren: () => import('./r91/r91.module').then((m) => m.R91Module),
  },
  {
    path: 'r92',
    loadChildren: () => import('./r92/r92.module').then((m) => m.R92Module),
  },
  {
    path: 'r93',
    loadChildren: () => import('./r93/r93.module').then((m) => m.R93Module),
  },
  {
    path: 'r94',
    loadChildren: () => import('./r94/r94.module').then((m) => m.R94Module),
  },
  {
    path: 'r95',
    loadChildren: () => import('./r95/r95.module').then((m) => m.R95Module),
  },
  {
    path: 'r96',
    loadChildren: () => import('./r96/r96.module').then((m) => m.R96Module),
  },
  {
    path: 'r97',
    loadChildren: () => import('./r97/r97.module').then((m) => m.R97Module),
  },
  {
    path: 'r98',
    loadChildren: () => import('./r98/r98.module').then((m) => m.R98Module),
  },
  {
    path: 'r99',
    loadChildren: () => import('./r99/r99.module').then((m) => m.R99Module),
  },
  {
    path: 'r100',
    loadChildren: () => import('./r100/r100.module').then((m) => m.R100Module),
  },
  {
    path: 'r101',
    loadChildren: () => import('./r101/r101.module').then((m) => m.R101Module),
  },
  {
    path: 'r102',
    loadChildren: () => import('./r102/r102.module').then((m) => m.R102Module),
  },
  {
    path: 'r103',
    loadChildren: () => import('./r103/r103.module').then((m) => m.R103Module),
  },
  {
    path: 'r104',
    loadChildren: () => import('./r104/r104.module').then((m) => m.R104Module),
  },
  {
    path: 'r105',
    loadChildren: () => import('./r105/r105.module').then((m) => m.R105Module),
  },
  {
    path: 'r106',
    loadChildren: () => import('./r106/r106.module').then((m) => m.R106Module),
  },
  {
    path: 'r107',
    loadChildren: () => import('./r107/r107.module').then((m) => m.R107Module),
  },
  {
    path: 'r108',
    loadChildren: () => import('./r108/r108.module').then((m) => m.R108Module),
  },
  {
    path: 'r109',
    loadChildren: () => import('./r109/r109.module').then((m) => m.R109Module),
  },
  {
    path: 'r110',
    loadChildren: () => import('./r110/r110.module').then((m) => m.R110Module),
  },
  {
    path: 'r111',
    loadChildren: () => import('./r111/r111.module').then((m) => m.R111Module),
  },
  {
    path: 'r112',
    loadChildren: () => import('./r112/r112.module').then((m) => m.R112Module),
  },
  {
    path: 'r113',
    loadChildren: () => import('./r113/r113.module').then((m) => m.R113Module),
  },
  {
    path: 'r114',
    loadChildren: () => import('./r114/r114.module').then((m) => m.R114Module),
  },
  {
    path: 'r115',
    loadChildren: () => import('./r115/r115.module').then((m) => m.R115Module),
  },
  {
    path: 'r116',
    loadChildren: () => import('./r116/r116.module').then((m) => m.R116Module),
  },
  {
    path: 'r117',
    loadChildren: () => import('./r117/r117.module').then((m) => m.R117Module),
  },
  {
    path: 'r118',
    loadChildren: () => import('./r118/r118.module').then((m) => m.R118Module),
  },
  {
    path: 'r119',
    loadChildren: () => import('./r119/r119.module').then((m) => m.R119Module),
  },
  {
    path: 'r120',
    loadChildren: () => import('./r120/r120.module').then((m) => m.R120Module),
  },
  {
    path: 'r121',
    loadChildren: () => import('./r121/r121.module').then((m) => m.R121Module),
  },
  {
    path: 'r122',
    loadChildren: () => import('./r122/r122.module').then((m) => m.R122Module),
  },
  {
    path: 'r123',
    loadChildren: () => import('./r123/r123.module').then((m) => m.R123Module),
  },
  {
    path: 'r124',
    loadChildren: () => import('./r124/r124.module').then((m) => m.R124Module),
  },
  {
    path: 'r125',
    loadChildren: () => import('./r125/r125.module').then((m) => m.R125Module),
  },
  {
    path: 'r126',
    loadChildren: () => import('./r126/r126.module').then((m) => m.R126Module),
  },
  {
    path: 'r127',
    loadChildren: () => import('./r127/r127.module').then((m) => m.R127Module),
  },
  {
    path: 'r128',
    loadChildren: () => import('./r128/r128.module').then((m) => m.R128Module),
  },
  {
    path: 'r129',
    loadChildren: () => import('./r129/r129.module').then((m) => m.R129Module),
  },
  {
    path: 'r130',
    loadChildren: () => import('./r130/r130.module').then((m) => m.R130Module),
  },
  {
    path: 'r131',
    loadChildren: () => import('./r131/r131.module').then((m) => m.R131Module),
  },
  {
    path: 'r132',
    loadChildren: () => import('./r132/r132.module').then((m) => m.R132Module),
  },
  {
    path: 'r133',
    loadChildren: () => import('./r133/r133.module').then((m) => m.R133Module),
  },
  {
    path: 'r134',
    loadChildren: () => import('./r134/r134.module').then((m) => m.R134Module),
  },
  {
    path: 'r135',
    loadChildren: () => import('./r135/r135.module').then((m) => m.R135Module),
  },
  {
    path: 'r136',
    loadChildren: () => import('./r136/r136.module').then((m) => m.R136Module),
  },
  {
    path: 'r137',
    loadChildren: () => import('./r137/r137.module').then((m) => m.R137Module),
  },
  {
    path: 'r138',
    loadChildren: () => import('./r138/r138.module').then((m) => m.R138Module),
  },
  {
    path: 'r139',
    loadChildren: () => import('./r139/r139.module').then((m) => m.R139Module),
  },
  {
    path: 'r140',
    loadChildren: () => import('./r140/r140.module').then((m) => m.R140Module),
  },
  {
    path: 'r141',
    loadChildren: () => import('./r141/r141.module').then((m) => m.R141Module),
  },
  {
    path: 'r142',
    loadChildren: () => import('./r142/r142.module').then((m) => m.R142Module),
  },
  {
    path: 'r143',
    loadChildren: () => import('./r143/r143.module').then((m) => m.R143Module),
  },
  {
    path: 'r144',
    loadChildren: () => import('./r144/r144.module').then((m) => m.R144Module),
  },
  {
    path: 'r145',
    loadChildren: () => import('./r145/r145.module').then((m) => m.R145Module),
  },
  {
    path: 'r146',
    loadChildren: () => import('./r146/r146.module').then((m) => m.R146Module),
  },
  {
    path: 'r147',
    loadChildren: () => import('./r147/r147.module').then((m) => m.R147Module),
  },
  {
    path: 'r148',
    loadChildren: () => import('./r148/r148.module').then((m) => m.R148Module),
  },
  {
    path: 'r149',
    loadChildren: () => import('./r149/r149.module').then((m) => m.R149Module),
  },
  {
    path: 'r150',
    loadChildren: () => import('./r150/r150.module').then((m) => m.R150Module),
  },
  {
    path: 'r151',
    loadChildren: () => import('./r151/r151.module').then((m) => m.R151Module),
  },
  {
    path: 'r152',
    loadChildren: () => import('./r152/r152.module').then((m) => m.R152Module),
  },
  {
    path: 'r153',
    loadChildren: () => import('./r153/r153.module').then((m) => m.R153Module),
  },
  {
    path: 'r154',
    loadChildren: () => import('./r154/r154.module').then((m) => m.R154Module),
  },
  {
    path: 'r155',
    loadChildren: () => import('./r155/r155.module').then((m) => m.R155Module),
  },
  {
    path: 'r156',
    loadChildren: () => import('./r156/r156.module').then((m) => m.R156Module),
  },
  {
    path: 'r157',
    loadChildren: () => import('./r157/r157.module').then((m) => m.R157Module),
  },
  {
    path: 'r158',
    loadChildren: () => import('./r158/r158.module').then((m) => m.R158Module),
  },
  {
    path: 'r159',
    loadChildren: () => import('./r159/r159.module').then((m) => m.R159Module),
  },
  {
    path: 'r160',
    loadChildren: () => import('./r160/r160.module').then((m) => m.R160Module),
  },
  {
    path: 'r161',
    loadChildren: () => import('./r161/r161.module').then((m) => m.R161Module),
  },
  {
    path: 'r162',
    loadChildren: () => import('./r162/r162.module').then((m) => m.R162Module),
  },
  {
    path: 'r163',
    loadChildren: () => import('./r163/r163.module').then((m) => m.R163Module),
  },
  {
    path: 'r164',
    loadChildren: () => import('./r164/r164.module').then((m) => m.R164Module),
  },
  {
    path: 'r165',
    loadChildren: () => import('./r165/r165.module').then((m) => m.R165Module),
  },
  {
    path: 'r166',
    loadChildren: () => import('./r166/r166.module').then((m) => m.R166Module),
  },
  {
    path: 'r167',
    loadChildren: () => import('./r167/r167.module').then((m) => m.R167Module),
  },
  {
    path: 'r168',
    loadChildren: () => import('./r168/r168.module').then((m) => m.R168Module),
  },
  {
    path: 'r169',
    loadChildren: () => import('./r169/r169.module').then((m) => m.R169Module),
  },
  {
    path: 'r170',
    loadChildren: () => import('./r170/r170.module').then((m) => m.R170Module),
  },
  {
    path: 'r171',
    loadChildren: () => import('./r171/r171.module').then((m) => m.R171Module),
  },
  {
    path: 'r172',
    loadChildren: () => import('./r172/r172.module').then((m) => m.R172Module),
  },
  {
    path: 'r173',
    loadChildren: () => import('./r173/r173.module').then((m) => m.R173Module),
  },
  {
    path: 'r174',
    loadChildren: () => import('./r174/r174.module').then((m) => m.R174Module),
  },
  {
    path: 'r175',
    loadChildren: () => import('./r175/r175.module').then((m) => m.R175Module),
  },
  {
    path: 'r176',
    loadChildren: () => import('./r176/r176.module').then((m) => m.R176Module),
  },
  {
    path: 'r177',
    loadChildren: () => import('./r177/r177.module').then((m) => m.R177Module),
  },
  {
    path: 'r178',
    loadChildren: () => import('./r178/r178.module').then((m) => m.R178Module),
  },
  {
    path: 'r179',
    loadChildren: () => import('./r179/r179.module').then((m) => m.R179Module),
  },
  {
    path: 'r180',
    loadChildren: () => import('./r180/r180.module').then((m) => m.R180Module),
  },
  {
    path: 'r181',
    loadChildren: () => import('./r181/r181.module').then((m) => m.R181Module),
  },
  {
    path: 'r182',
    loadChildren: () => import('./r182/r182.module').then((m) => m.R182Module),
  },
  {
    path: 'r183',
    loadChildren: () => import('./r183/r183.module').then((m) => m.R183Module),
  },
  {
    path: 'r184',
    loadChildren: () => import('./r184/r184.module').then((m) => m.R184Module),
  },
  {
    path: 'r185',
    loadChildren: () => import('./r185/r185.module').then((m) => m.R185Module),
  },
  {
    path: 'r186',
    loadChildren: () => import('./r186/r186.module').then((m) => m.R186Module),
  },
  {
    path: 'r187',
    loadChildren: () => import('./r187/r187.module').then((m) => m.R187Module),
  },
  {
    path: 'r188',
    loadChildren: () => import('./r188/r188.module').then((m) => m.R188Module),
  },
  {
    path: 'r189',
    loadChildren: () => import('./r189/r189.module').then((m) => m.R189Module),
  },
  {
    path: 'r190',
    loadChildren: () => import('./r190/r190.module').then((m) => m.R190Module),
  },
  {
    path: 'r191',
    loadChildren: () => import('./r191/r191.module').then((m) => m.R191Module),
  },
  {
    path: 'r192',
    loadChildren: () => import('./r192/r192.module').then((m) => m.R192Module),
  },
  {
    path: 'r193',
    loadChildren: () => import('./r193/r193.module').then((m) => m.R193Module),
  },
  {
    path: 'r194',
    loadChildren: () => import('./r194/r194.module').then((m) => m.R194Module),
  },
  {
    path: 'r195',
    loadChildren: () => import('./r195/r195.module').then((m) => m.R195Module),
  },
  {
    path: 'r196',
    loadChildren: () => import('./r196/r196.module').then((m) => m.R196Module),
  },
  {
    path: 'r197',
    loadChildren: () => import('./r197/r197.module').then((m) => m.R197Module),
  },
  {
    path: 'r198',
    loadChildren: () => import('./r198/r198.module').then((m) => m.R198Module),
  },
  {
    path: 'r199',
    loadChildren: () => import('./r199/r199.module').then((m) => m.R199Module),
  },
  {
    path: 'r200',
    loadChildren: () => import('./r200/r200.module').then((m) => m.R200Module),
  },
  {
    path: 'r201',
    loadChildren: () => import('./r201/r201.module').then((m) => m.R201Module),
  },
  {
    path: 'r202',
    loadChildren: () => import('./r202/r202.module').then((m) => m.R202Module),
  },
  {
    path: 'r203',
    loadChildren: () => import('./r203/r203.module').then((m) => m.R203Module),
  },
  {
    path: 'r204',
    loadChildren: () => import('./r204/r204.module').then((m) => m.R204Module),
  },
  {
    path: 'r205',
    loadChildren: () => import('./r205/r205.module').then((m) => m.R205Module),
  },
  {
    path: 'r206',
    loadChildren: () => import('./r206/r206.module').then((m) => m.R206Module),
  },
  {
    path: 'r207',
    loadChildren: () => import('./r207/r207.module').then((m) => m.R207Module),
  },
  {
    path: 'r208',
    loadChildren: () => import('./r208/r208.module').then((m) => m.R208Module),
  },
  {
    path: 'r209',
    loadChildren: () => import('./r209/r209.module').then((m) => m.R209Module),
  },
  {
    path: 'r210',
    loadChildren: () => import('./r210/r210.module').then((m) => m.R210Module),
  },
  {
    path: 'r211',
    loadChildren: () => import('./r211/r211.module').then((m) => m.R211Module),
  },
  {
    path: 'r212',
    loadChildren: () => import('./r212/r212.module').then((m) => m.R212Module),
  },
  {
    path: 'r213',
    loadChildren: () => import('./r213/r213.module').then((m) => m.R213Module),
  },
  {
    path: 'r214',
    loadChildren: () => import('./r214/r214.module').then((m) => m.R214Module),
  },
  {
    path: 'r215',
    loadChildren: () => import('./r215/r215.module').then((m) => m.R215Module),
  },
  {
    path: 'r216',
    loadChildren: () => import('./r216/r216.module').then((m) => m.R216Module),
  },
  {
    path: 'r217',
    loadChildren: () => import('./r217/r217.module').then((m) => m.R217Module),
  },
  {
    path: 'r218',
    loadChildren: () => import('./r218/r218.module').then((m) => m.R218Module),
  },
  {
    path: 'r219',
    loadChildren: () => import('./r219/r219.module').then((m) => m.R219Module),
  },
  {
    path: 'r220',
    loadChildren: () => import('./r220/r220.module').then((m) => m.R220Module),
  },
  {
    path: 'r221',
    loadChildren: () => import('./r221/r221.module').then((m) => m.R221Module),
  },
  {
    path: 'r222',
    loadChildren: () => import('./r222/r222.module').then((m) => m.R222Module),
  },
  {
    path: 'r223',
    loadChildren: () => import('./r223/r223.module').then((m) => m.R223Module),
  },
  {
    path: 'r224',
    loadChildren: () => import('./r224/r224.module').then((m) => m.R224Module),
  },
  {
    path: 'r225',
    loadChildren: () => import('./r225/r225.module').then((m) => m.R225Module),
  },
  {
    path: 'r226',
    loadChildren: () => import('./r226/r226.module').then((m) => m.R226Module),
  },
  {
    path: 'r227',
    loadChildren: () => import('./r227/r227.module').then((m) => m.R227Module),
  },
  {
    path: 'r228',
    loadChildren: () => import('./r228/r228.module').then((m) => m.R228Module),
  },
  {
    path: 'r229',
    loadChildren: () => import('./r229/r229.module').then((m) => m.R229Module),
  },
  {
    path: 'r230',
    loadChildren: () => import('./r230/r230.module').then((m) => m.R230Module),
  },
  {
    path: 'r231',
    loadChildren: () => import('./r231/r231.module').then((m) => m.R231Module),
  },
  {
    path: 'r232',
    loadChildren: () => import('./r232/r232.module').then((m) => m.R232Module),
  },
  {
    path: 'r233',
    loadChildren: () => import('./r233/r233.module').then((m) => m.R233Module),
  },
  {
    path: 'r234',
    loadChildren: () => import('./r234/r234.module').then((m) => m.R234Module),
  },
  {
    path: 'r235',
    loadChildren: () => import('./r235/r235.module').then((m) => m.R235Module),
  },
  {
    path: 'r236',
    loadChildren: () => import('./r236/r236.module').then((m) => m.R236Module),
  },
  {
    path: 'r237',
    loadChildren: () => import('./r237/r237.module').then((m) => m.R237Module),
  },
  {
    path: 'r238',
    loadChildren: () => import('./r238/r238.module').then((m) => m.R238Module),
  },
  {
    path: 'r239',
    loadChildren: () => import('./r239/r239.module').then((m) => m.R239Module),
  },
  {
    path: 'r240',
    loadChildren: () => import('./r240/r240.module').then((m) => m.R240Module),
  },
  {
    path: 'r241',
    loadChildren: () => import('./r241/r241.module').then((m) => m.R241Module),
  },
  {
    path: 'r242',
    loadChildren: () => import('./r242/r242.module').then((m) => m.R242Module),
  },
  {
    path: 'r243',
    loadChildren: () => import('./r243/r243.module').then((m) => m.R243Module),
  },
  {
    path: 'r244',
    loadChildren: () => import('./r244/r244.module').then((m) => m.R244Module),
  },
  {
    path: 'r245',
    loadChildren: () => import('./r245/r245.module').then((m) => m.R245Module),
  },
  {
    path: 'r246',
    loadChildren: () => import('./r246/r246.module').then((m) => m.R246Module),
  },
  {
    path: 'r247',
    loadChildren: () => import('./r247/r247.module').then((m) => m.R247Module),
  },
  {
    path: 'r248',
    loadChildren: () => import('./r248/r248.module').then((m) => m.R248Module),
  },
  {
    path: 'r249',
    loadChildren: () => import('./r249/r249.module').then((m) => m.R249Module),
  },
  {
    path: 'r250',
    loadChildren: () => import('./r250/r250.module').then((m) => m.R250Module),
  },
  {
    path: 'r251',
    loadChildren: () => import('./r251/r251.module').then((m) => m.R251Module),
  },
  {
    path: 'r252',
    loadChildren: () => import('./r252/r252.module').then((m) => m.R252Module),
  },
  {
    path: 'r253',
    loadChildren: () => import('./r253/r253.module').then((m) => m.R253Module),
  },
  {
    path: 'r254',
    loadChildren: () => import('./r254/r254.module').then((m) => m.R254Module),
  },
  {
    path: 'r255',
    loadChildren: () => import('./r255/r255.module').then((m) => m.R255Module),
  },
  {
    path: 'r256',
    loadChildren: () => import('./r256/r256.module').then((m) => m.R256Module),
  },
  {
    path: 'r257',
    loadChildren: () => import('./r257/r257.module').then((m) => m.R257Module),
  },
  {
    path: 'r258',
    loadChildren: () => import('./r258/r258.module').then((m) => m.R258Module),
  },
  {
    path: 'r259',
    loadChildren: () => import('./r259/r259.module').then((m) => m.R259Module),
  },
  {
    path: 'r260',
    loadChildren: () => import('./r260/r260.module').then((m) => m.R260Module),
  },
  {
    path: 'r261',
    loadChildren: () => import('./r261/r261.module').then((m) => m.R261Module),
  },
  {
    path: 'r262',
    loadChildren: () => import('./r262/r262.module').then((m) => m.R262Module),
  },
  {
    path: 'r263',
    loadChildren: () => import('./r263/r263.module').then((m) => m.R263Module),
  },
  {
    path: 'r264',
    loadChildren: () => import('./r264/r264.module').then((m) => m.R264Module),
  },
  {
    path: 'r265',
    loadChildren: () => import('./r265/r265.module').then((m) => m.R265Module),
  },
  {
    path: 'r266',
    loadChildren: () => import('./r266/r266.module').then((m) => m.R266Module),
  },
  {
    path: 'r267',
    loadChildren: () => import('./r267/r267.module').then((m) => m.R267Module),
  },
  {
    path: 'r268',
    loadChildren: () => import('./r268/r268.module').then((m) => m.R268Module),
  },
  {
    path: 'r269',
    loadChildren: () => import('./r269/r269.module').then((m) => m.R269Module),
  },
  {
    path: 'r270',
    loadChildren: () => import('./r270/r270.module').then((m) => m.R270Module),
  },
  {
    path: 'r271',
    loadChildren: () => import('./r271/r271.module').then((m) => m.R271Module),
  },
  {
    path: 'r272',
    loadChildren: () => import('./r272/r272.module').then((m) => m.R272Module),
  },
  {
    path: 'r273',
    loadChildren: () => import('./r273/r273.module').then((m) => m.R273Module),
  },
  {
    path: 'r274',
    loadChildren: () => import('./r274/r274.module').then((m) => m.R274Module),
  },
  {
    path: 'r275',
    loadChildren: () => import('./r275/r275.module').then((m) => m.R275Module),
  },
  {
    path: 'r276',
    loadChildren: () => import('./r276/r276.module').then((m) => m.R276Module),
  },
  {
    path: 'r277',
    loadChildren: () => import('./r277/r277.module').then((m) => m.R277Module),
  },
  {
    path: 'r278',
    loadChildren: () => import('./r278/r278.module').then((m) => m.R278Module),
  },
  {
    path: 'r279',
    loadChildren: () => import('./r279/r279.module').then((m) => m.R279Module),
  },
  {
    path: 'r280',
    loadChildren: () => import('./r280/r280.module').then((m) => m.R280Module),
  },
  {
    path: 'r281',
    loadChildren: () => import('./r281/r281.module').then((m) => m.R281Module),
  },
  {
    path: 'r282',
    loadChildren: () => import('./r282/r282.module').then((m) => m.R282Module),
  },
  {
    path: 'r283',
    loadChildren: () => import('./r283/r283.module').then((m) => m.R283Module),
  },
  {
    path: 'r284',
    loadChildren: () => import('./r284/r284.module').then((m) => m.R284Module),
  },
  {
    path: 'r285',
    loadChildren: () => import('./r285/r285.module').then((m) => m.R285Module),
  },
  {
    path: 'r286',
    loadChildren: () => import('./r286/r286.module').then((m) => m.R286Module),
  },
  {
    path: 'r287',
    loadChildren: () => import('./r287/r287.module').then((m) => m.R287Module),
  },
  {
    path: 'r288',
    loadChildren: () => import('./r288/r288.module').then((m) => m.R288Module),
  },
  {
    path: 'r289',
    loadChildren: () => import('./r289/r289.module').then((m) => m.R289Module),
  },
  {
    path: 'r290',
    loadChildren: () => import('./r290/r290.module').then((m) => m.R290Module),
  },
  {
    path: 'r291',
    loadChildren: () => import('./r291/r291.module').then((m) => m.R291Module),
  },
  {
    path: 'r292',
    loadChildren: () => import('./r292/r292.module').then((m) => m.R292Module),
  },
  {
    path: 'r293',
    loadChildren: () => import('./r293/r293.module').then((m) => m.R293Module),
  },
  {
    path: 'r294',
    loadChildren: () => import('./r294/r294.module').then((m) => m.R294Module),
  },
  {
    path: 'r295',
    loadChildren: () => import('./r295/r295.module').then((m) => m.R295Module),
  },
  {
    path: 'r296',
    loadChildren: () => import('./r296/r296.module').then((m) => m.R296Module),
  },
  {
    path: 'r297',
    loadChildren: () => import('./r297/r297.module').then((m) => m.R297Module),
  },
  {
    path: 'r298',
    loadChildren: () => import('./r298/r298.module').then((m) => m.R298Module),
  },
  {
    path: 'r299',
    loadChildren: () => import('./r299/r299.module').then((m) => m.R299Module),
  },
  {
    path: 'r300',
    loadChildren: () => import('./r300/r300.module').then((m) => m.R300Module),
  },
  {
    path: 'r301',
    loadChildren: () => import('./r301/r301.module').then((m) => m.R301Module),
  },
  {
    path: 'r302',
    loadChildren: () => import('./r302/r302.module').then((m) => m.R302Module),
  },
  {
    path: 'r303',
    loadChildren: () => import('./r303/r303.module').then((m) => m.R303Module),
  },
  {
    path: 'r304',
    loadChildren: () => import('./r304/r304.module').then((m) => m.R304Module),
  },
  {
    path: 'r305',
    loadChildren: () => import('./r305/r305.module').then((m) => m.R305Module),
  },
  {
    path: 'r306',
    loadChildren: () => import('./r306/r306.module').then((m) => m.R306Module),
  },
  {
    path: 'r307',
    loadChildren: () => import('./r307/r307.module').then((m) => m.R307Module),
  },
  {
    path: 'r308',
    loadChildren: () => import('./r308/r308.module').then((m) => m.R308Module),
  },
  {
    path: 'r309',
    loadChildren: () => import('./r309/r309.module').then((m) => m.R309Module),
  },
  {
    path: 'r310',
    loadChildren: () => import('./r310/r310.module').then((m) => m.R310Module),
  },
  {
    path: 'r311',
    loadChildren: () => import('./r311/r311.module').then((m) => m.R311Module),
  },
  {
    path: 'r312',
    loadChildren: () => import('./r312/r312.module').then((m) => m.R312Module),
  },
  {
    path: 'r313',
    loadChildren: () => import('./r313/r313.module').then((m) => m.R313Module),
  },
  {
    path: 'r314',
    loadChildren: () => import('./r314/r314.module').then((m) => m.R314Module),
  },
  {
    path: 'r315',
    loadChildren: () => import('./r315/r315.module').then((m) => m.R315Module),
  },
  {
    path: 'r316',
    loadChildren: () => import('./r316/r316.module').then((m) => m.R316Module),
  },
  {
    path: 'r317',
    loadChildren: () => import('./r317/r317.module').then((m) => m.R317Module),
  },
  {
    path: 'r318',
    loadChildren: () => import('./r318/r318.module').then((m) => m.R318Module),
  },
  {
    path: 'r319',
    loadChildren: () => import('./r319/r319.module').then((m) => m.R319Module),
  },
  {
    path: 'r320',
    loadChildren: () => import('./r320/r320.module').then((m) => m.R320Module),
  },
  {
    path: 'r321',
    loadChildren: () => import('./r321/r321.module').then((m) => m.R321Module),
  },
  {
    path: 'r322',
    loadChildren: () => import('./r322/r322.module').then((m) => m.R322Module),
  },
  {
    path: 'r323',
    loadChildren: () => import('./r323/r323.module').then((m) => m.R323Module),
  },
  {
    path: 'r324',
    loadChildren: () => import('./r324/r324.module').then((m) => m.R324Module),
  },
  {
    path: 'r325',
    loadChildren: () => import('./r325/r325.module').then((m) => m.R325Module),
  },
  {
    path: 'r326',
    loadChildren: () => import('./r326/r326.module').then((m) => m.R326Module),
  },
  {
    path: 'r327',
    loadChildren: () => import('./r327/r327.module').then((m) => m.R327Module),
  },
  {
    path: 'r328',
    loadChildren: () => import('./r328/r328.module').then((m) => m.R328Module),
  },
  {
    path: 'r329',
    loadChildren: () => import('./r329/r329.module').then((m) => m.R329Module),
  },
  {
    path: 'r330',
    loadChildren: () => import('./r330/r330.module').then((m) => m.R330Module),
  },
  {
    path: 'r331',
    loadChildren: () => import('./r331/r331.module').then((m) => m.R331Module),
  },
  {
    path: 'r332',
    loadChildren: () => import('./r332/r332.module').then((m) => m.R332Module),
  },
  {
    path: 'r333',
    loadChildren: () => import('./r333/r333.module').then((m) => m.R333Module),
  },
  {
    path: 'r334',
    loadChildren: () => import('./r334/r334.module').then((m) => m.R334Module),
  },
  {
    path: 'r335',
    loadChildren: () => import('./r335/r335.module').then((m) => m.R335Module),
  },
  {
    path: 'r336',
    loadChildren: () => import('./r336/r336.module').then((m) => m.R336Module),
  },
  {
    path: 'r337',
    loadChildren: () => import('./r337/r337.module').then((m) => m.R337Module),
  },
  {
    path: 'r338',
    loadChildren: () => import('./r338/r338.module').then((m) => m.R338Module),
  },
  {
    path: 'r339',
    loadChildren: () => import('./r339/r339.module').then((m) => m.R339Module),
  },
  {
    path: 'r340',
    loadChildren: () => import('./r340/r340.module').then((m) => m.R340Module),
  },
  {
    path: 'r341',
    loadChildren: () => import('./r341/r341.module').then((m) => m.R341Module),
  },
  {
    path: 'r342',
    loadChildren: () => import('./r342/r342.module').then((m) => m.R342Module),
  },
  {
    path: 'r343',
    loadChildren: () => import('./r343/r343.module').then((m) => m.R343Module),
  },
  {
    path: 'r344',
    loadChildren: () => import('./r344/r344.module').then((m) => m.R344Module),
  },
  {
    path: 'r345',
    loadChildren: () => import('./r345/r345.module').then((m) => m.R345Module),
  },
  {
    path: 'r346',
    loadChildren: () => import('./r346/r346.module').then((m) => m.R346Module),
  },
  {
    path: 'r347',
    loadChildren: () => import('./r347/r347.module').then((m) => m.R347Module),
  },
  {
    path: 'r348',
    loadChildren: () => import('./r348/r348.module').then((m) => m.R348Module),
  },
  {
    path: 'r349',
    loadChildren: () => import('./r349/r349.module').then((m) => m.R349Module),
  },
  {
    path: 'r350',
    loadChildren: () => import('./r350/r350.module').then((m) => m.R350Module),
  },
  {
    path: 'r351',
    loadChildren: () => import('./r351/r351.module').then((m) => m.R351Module),
  },
  {
    path: 'r352',
    loadChildren: () => import('./r352/r352.module').then((m) => m.R352Module),
  },
  {
    path: 'r353',
    loadChildren: () => import('./r353/r353.module').then((m) => m.R353Module),
  },
  {
    path: 'r354',
    loadChildren: () => import('./r354/r354.module').then((m) => m.R354Module),
  },
  {
    path: 'r355',
    loadChildren: () => import('./r355/r355.module').then((m) => m.R355Module),
  },
  {
    path: 'r356',
    loadChildren: () => import('./r356/r356.module').then((m) => m.R356Module),
  },
  {
    path: 'r357',
    loadChildren: () => import('./r357/r357.module').then((m) => m.R357Module),
  },
  {
    path: 'r358',
    loadChildren: () => import('./r358/r358.module').then((m) => m.R358Module),
  },
  {
    path: 'r359',
    loadChildren: () => import('./r359/r359.module').then((m) => m.R359Module),
  },
  {
    path: 'r360',
    loadChildren: () => import('./r360/r360.module').then((m) => m.R360Module),
  },
  {
    path: 'r361',
    loadChildren: () => import('./r361/r361.module').then((m) => m.R361Module),
  },
  {
    path: 'r362',
    loadChildren: () => import('./r362/r362.module').then((m) => m.R362Module),
  },
  {
    path: 'r363',
    loadChildren: () => import('./r363/r363.module').then((m) => m.R363Module),
  },
  {
    path: 'r364',
    loadChildren: () => import('./r364/r364.module').then((m) => m.R364Module),
  },
  {
    path: 'r365',
    loadChildren: () => import('./r365/r365.module').then((m) => m.R365Module),
  },
  {
    path: 'r366',
    loadChildren: () => import('./r366/r366.module').then((m) => m.R366Module),
  },
  {
    path: 'r367',
    loadChildren: () => import('./r367/r367.module').then((m) => m.R367Module),
  },
  {
    path: 'r368',
    loadChildren: () => import('./r368/r368.module').then((m) => m.R368Module),
  },
  {
    path: 'r369',
    loadChildren: () => import('./r369/r369.module').then((m) => m.R369Module),
  },
  {
    path: 'r370',
    loadChildren: () => import('./r370/r370.module').then((m) => m.R370Module),
  },
  {
    path: 'r371',
    loadChildren: () => import('./r371/r371.module').then((m) => m.R371Module),
  },
  {
    path: 'r372',
    loadChildren: () => import('./r372/r372.module').then((m) => m.R372Module),
  },
  {
    path: 'r373',
    loadChildren: () => import('./r373/r373.module').then((m) => m.R373Module),
  },
  {
    path: 'r374',
    loadChildren: () => import('./r374/r374.module').then((m) => m.R374Module),
  },
  {
    path: 'r375',
    loadChildren: () => import('./r375/r375.module').then((m) => m.R375Module),
  },
  {
    path: 'r376',
    loadChildren: () => import('./r376/r376.module').then((m) => m.R376Module),
  },
  {
    path: 'r377',
    loadChildren: () => import('./r377/r377.module').then((m) => m.R377Module),
  },
  {
    path: 'r378',
    loadChildren: () => import('./r378/r378.module').then((m) => m.R378Module),
  },
  {
    path: 'r379',
    loadChildren: () => import('./r379/r379.module').then((m) => m.R379Module),
  },
  {
    path: 'r380',
    loadChildren: () => import('./r380/r380.module').then((m) => m.R380Module),
  },
  {
    path: 'r381',
    loadChildren: () => import('./r381/r381.module').then((m) => m.R381Module),
  },
  {
    path: 'r382',
    loadChildren: () => import('./r382/r382.module').then((m) => m.R382Module),
  },
  {
    path: 'r383',
    loadChildren: () => import('./r383/r383.module').then((m) => m.R383Module),
  },
  {
    path: 'r384',
    loadChildren: () => import('./r384/r384.module').then((m) => m.R384Module),
  },
  {
    path: 'r385',
    loadChildren: () => import('./r385/r385.module').then((m) => m.R385Module),
  },
  {
    path: 'r386',
    loadChildren: () => import('./r386/r386.module').then((m) => m.R386Module),
  },
  {
    path: 'r387',
    loadChildren: () => import('./r387/r387.module').then((m) => m.R387Module),
  },
  {
    path: 'r388',
    loadChildren: () => import('./r388/r388.module').then((m) => m.R388Module),
  },
  {
    path: 'r389',
    loadChildren: () => import('./r389/r389.module').then((m) => m.R389Module),
  },
  {
    path: 'r390',
    loadChildren: () => import('./r390/r390.module').then((m) => m.R390Module),
  },
  {
    path: 'r391',
    loadChildren: () => import('./r391/r391.module').then((m) => m.R391Module),
  },
  {
    path: 'r392',
    loadChildren: () => import('./r392/r392.module').then((m) => m.R392Module),
  },
  {
    path: 'r393',
    loadChildren: () => import('./r393/r393.module').then((m) => m.R393Module),
  },
  {
    path: 'r394',
    loadChildren: () => import('./r394/r394.module').then((m) => m.R394Module),
  },
  {
    path: 'r395',
    loadChildren: () => import('./r395/r395.module').then((m) => m.R395Module),
  },
  {
    path: 'r396',
    loadChildren: () => import('./r396/r396.module').then((m) => m.R396Module),
  },
  {
    path: 'r397',
    loadChildren: () => import('./r397/r397.module').then((m) => m.R397Module),
  },
  {
    path: 'r398',
    loadChildren: () => import('./r398/r398.module').then((m) => m.R398Module),
  },
  {
    path: 'r399',
    loadChildren: () => import('./r399/r399.module').then((m) => m.R399Module),
  },
  {
    path: 'r400',
    loadChildren: () => import('./r400/r400.module').then((m) => m.R400Module),
  },
  {
    path: 'r401',
    loadChildren: () => import('./r401/r401.module').then((m) => m.R401Module),
  },
  {
    path: 'r402',
    loadChildren: () => import('./r402/r402.module').then((m) => m.R402Module),
  },
  {
    path: 'r403',
    loadChildren: () => import('./r403/r403.module').then((m) => m.R403Module),
  },
  {
    path: 'r404',
    loadChildren: () => import('./r404/r404.module').then((m) => m.R404Module),
  },
  {
    path: 'r405',
    loadChildren: () => import('./r405/r405.module').then((m) => m.R405Module),
  },
  {
    path: 'r406',
    loadChildren: () => import('./r406/r406.module').then((m) => m.R406Module),
  },
  {
    path: 'r407',
    loadChildren: () => import('./r407/r407.module').then((m) => m.R407Module),
  },
  {
    path: 'r408',
    loadChildren: () => import('./r408/r408.module').then((m) => m.R408Module),
  },
  {
    path: 'r409',
    loadChildren: () => import('./r409/r409.module').then((m) => m.R409Module),
  },
  {
    path: 'r410',
    loadChildren: () => import('./r410/r410.module').then((m) => m.R410Module),
  },
  {
    path: 'r411',
    loadChildren: () => import('./r411/r411.module').then((m) => m.R411Module),
  },
  {
    path: 'r412',
    loadChildren: () => import('./r412/r412.module').then((m) => m.R412Module),
  },
  {
    path: 'r413',
    loadChildren: () => import('./r413/r413.module').then((m) => m.R413Module),
  },
  {
    path: 'r414',
    loadChildren: () => import('./r414/r414.module').then((m) => m.R414Module),
  },
  {
    path: 'r415',
    loadChildren: () => import('./r415/r415.module').then((m) => m.R415Module),
  },
  {
    path: 'r416',
    loadChildren: () => import('./r416/r416.module').then((m) => m.R416Module),
  },
  {
    path: 'r417',
    loadChildren: () => import('./r417/r417.module').then((m) => m.R417Module),
  },
  {
    path: 'r418',
    loadChildren: () => import('./r418/r418.module').then((m) => m.R418Module),
  },
  {
    path: 'r419',
    loadChildren: () => import('./r419/r419.module').then((m) => m.R419Module),
  },
  {
    path: 'r420',
    loadChildren: () => import('./r420/r420.module').then((m) => m.R420Module),
  },
  {
    path: 'r421',
    loadChildren: () => import('./r421/r421.module').then((m) => m.R421Module),
  },
  {
    path: 'r422',
    loadChildren: () => import('./r422/r422.module').then((m) => m.R422Module),
  },
  {
    path: 'r423',
    loadChildren: () => import('./r423/r423.module').then((m) => m.R423Module),
  },
  {
    path: 'r424',
    loadChildren: () => import('./r424/r424.module').then((m) => m.R424Module),
  },
  {
    path: 'r425',
    loadChildren: () => import('./r425/r425.module').then((m) => m.R425Module),
  },
  {
    path: 'r426',
    loadChildren: () => import('./r426/r426.module').then((m) => m.R426Module),
  },
  {
    path: 'r427',
    loadChildren: () => import('./r427/r427.module').then((m) => m.R427Module),
  },
  {
    path: 'r428',
    loadChildren: () => import('./r428/r428.module').then((m) => m.R428Module),
  },
  {
    path: 'r429',
    loadChildren: () => import('./r429/r429.module').then((m) => m.R429Module),
  },
  {
    path: 'r430',
    loadChildren: () => import('./r430/r430.module').then((m) => m.R430Module),
  },
  {
    path: 'r431',
    loadChildren: () => import('./r431/r431.module').then((m) => m.R431Module),
  },
  {
    path: 'r432',
    loadChildren: () => import('./r432/r432.module').then((m) => m.R432Module),
  },
  {
    path: 'r433',
    loadChildren: () => import('./r433/r433.module').then((m) => m.R433Module),
  },
  {
    path: 'r434',
    loadChildren: () => import('./r434/r434.module').then((m) => m.R434Module),
  },
  {
    path: 'r435',
    loadChildren: () => import('./r435/r435.module').then((m) => m.R435Module),
  },
  {
    path: 'r436',
    loadChildren: () => import('./r436/r436.module').then((m) => m.R436Module),
  },
  {
    path: 'r437',
    loadChildren: () => import('./r437/r437.module').then((m) => m.R437Module),
  },
  {
    path: 'r438',
    loadChildren: () => import('./r438/r438.module').then((m) => m.R438Module),
  },
  {
    path: 'r439',
    loadChildren: () => import('./r439/r439.module').then((m) => m.R439Module),
  },
  {
    path: 'r440',
    loadChildren: () => import('./r440/r440.module').then((m) => m.R440Module),
  },
  {
    path: 'r441',
    loadChildren: () => import('./r441/r441.module').then((m) => m.R441Module),
  },
  {
    path: 'r442',
    loadChildren: () => import('./r442/r442.module').then((m) => m.R442Module),
  },
  {
    path: 'r443',
    loadChildren: () => import('./r443/r443.module').then((m) => m.R443Module),
  },
  {
    path: 'r444',
    loadChildren: () => import('./r444/r444.module').then((m) => m.R444Module),
  },
  {
    path: 'r445',
    loadChildren: () => import('./r445/r445.module').then((m) => m.R445Module),
  },
  {
    path: 'r446',
    loadChildren: () => import('./r446/r446.module').then((m) => m.R446Module),
  },
  {
    path: 'r447',
    loadChildren: () => import('./r447/r447.module').then((m) => m.R447Module),
  },
  {
    path: 'r448',
    loadChildren: () => import('./r448/r448.module').then((m) => m.R448Module),
  },
  {
    path: 'r449',
    loadChildren: () => import('./r449/r449.module').then((m) => m.R449Module),
  },
  {
    path: 'r450',
    loadChildren: () => import('./r450/r450.module').then((m) => m.R450Module),
  },
  {
    path: 'r451',
    loadChildren: () => import('./r451/r451.module').then((m) => m.R451Module),
  },
  {
    path: 'r452',
    loadChildren: () => import('./r452/r452.module').then((m) => m.R452Module),
  },
  {
    path: 'r453',
    loadChildren: () => import('./r453/r453.module').then((m) => m.R453Module),
  },
  {
    path: 'r454',
    loadChildren: () => import('./r454/r454.module').then((m) => m.R454Module),
  },
  {
    path: 'r455',
    loadChildren: () => import('./r455/r455.module').then((m) => m.R455Module),
  },
  {
    path: 'r456',
    loadChildren: () => import('./r456/r456.module').then((m) => m.R456Module),
  },
  {
    path: 'r457',
    loadChildren: () => import('./r457/r457.module').then((m) => m.R457Module),
  },
  {
    path: 'r458',
    loadChildren: () => import('./r458/r458.module').then((m) => m.R458Module),
  },
  {
    path: 'r459',
    loadChildren: () => import('./r459/r459.module').then((m) => m.R459Module),
  },
  {
    path: 'r460',
    loadChildren: () => import('./r460/r460.module').then((m) => m.R460Module),
  },
  {
    path: 'r461',
    loadChildren: () => import('./r461/r461.module').then((m) => m.R461Module),
  },
  {
    path: 'r462',
    loadChildren: () => import('./r462/r462.module').then((m) => m.R462Module),
  },
  {
    path: 'r463',
    loadChildren: () => import('./r463/r463.module').then((m) => m.R463Module),
  },
  {
    path: 'r464',
    loadChildren: () => import('./r464/r464.module').then((m) => m.R464Module),
  },
  {
    path: 'r465',
    loadChildren: () => import('./r465/r465.module').then((m) => m.R465Module),
  },
  {
    path: 'r466',
    loadChildren: () => import('./r466/r466.module').then((m) => m.R466Module),
  },
  {
    path: 'r467',
    loadChildren: () => import('./r467/r467.module').then((m) => m.R467Module),
  },
  {
    path: 'r468',
    loadChildren: () => import('./r468/r468.module').then((m) => m.R468Module),
  },
  {
    path: 'r469',
    loadChildren: () => import('./r469/r469.module').then((m) => m.R469Module),
  },
  {
    path: 'r470',
    loadChildren: () => import('./r470/r470.module').then((m) => m.R470Module),
  },
  {
    path: 'r471',
    loadChildren: () => import('./r471/r471.module').then((m) => m.R471Module),
  },
  {
    path: 'r472',
    loadChildren: () => import('./r472/r472.module').then((m) => m.R472Module),
  },
  {
    path: 'r473',
    loadChildren: () => import('./r473/r473.module').then((m) => m.R473Module),
  },
  {
    path: 'r474',
    loadChildren: () => import('./r474/r474.module').then((m) => m.R474Module),
  },
  {
    path: 'r475',
    loadChildren: () => import('./r475/r475.module').then((m) => m.R475Module),
  },
  {
    path: 'r476',
    loadChildren: () => import('./r476/r476.module').then((m) => m.R476Module),
  },
  {
    path: 'r477',
    loadChildren: () => import('./r477/r477.module').then((m) => m.R477Module),
  },
  {
    path: 'r478',
    loadChildren: () => import('./r478/r478.module').then((m) => m.R478Module),
  },
  {
    path: 'r479',
    loadChildren: () => import('./r479/r479.module').then((m) => m.R479Module),
  },
  {
    path: 'r480',
    loadChildren: () => import('./r480/r480.module').then((m) => m.R480Module),
  },
  {
    path: 'r481',
    loadChildren: () => import('./r481/r481.module').then((m) => m.R481Module),
  },
  {
    path: 'r482',
    loadChildren: () => import('./r482/r482.module').then((m) => m.R482Module),
  },
  {
    path: 'r483',
    loadChildren: () => import('./r483/r483.module').then((m) => m.R483Module),
  },
  {
    path: 'r484',
    loadChildren: () => import('./r484/r484.module').then((m) => m.R484Module),
  },
  {
    path: 'r485',
    loadChildren: () => import('./r485/r485.module').then((m) => m.R485Module),
  },
  {
    path: 'r486',
    loadChildren: () => import('./r486/r486.module').then((m) => m.R486Module),
  },
  {
    path: 'r487',
    loadChildren: () => import('./r487/r487.module').then((m) => m.R487Module),
  },
  {
    path: 'r488',
    loadChildren: () => import('./r488/r488.module').then((m) => m.R488Module),
  },
  {
    path: 'r489',
    loadChildren: () => import('./r489/r489.module').then((m) => m.R489Module),
  },
  {
    path: 'r490',
    loadChildren: () => import('./r490/r490.module').then((m) => m.R490Module),
  },
  {
    path: 'r491',
    loadChildren: () => import('./r491/r491.module').then((m) => m.R491Module),
  },
  {
    path: 'r492',
    loadChildren: () => import('./r492/r492.module').then((m) => m.R492Module),
  },
  {
    path: 'r493',
    loadChildren: () => import('./r493/r493.module').then((m) => m.R493Module),
  },
  {
    path: 'r494',
    loadChildren: () => import('./r494/r494.module').then((m) => m.R494Module),
  },
  {
    path: 'r495',
    loadChildren: () => import('./r495/r495.module').then((m) => m.R495Module),
  },
  {
    path: 'r496',
    loadChildren: () => import('./r496/r496.module').then((m) => m.R496Module),
  },
  {
    path: 'r497',
    loadChildren: () => import('./r497/r497.module').then((m) => m.R497Module),
  },
  {
    path: 'r498',
    loadChildren: () => import('./r498/r498.module').then((m) => m.R498Module),
  },
  {
    path: 'r499',
    loadChildren: () => import('./r499/r499.module').then((m) => m.R499Module),
  },
  {
    path: 'r500',
    loadChildren: () => import('./r500/r500.module').then((m) => m.R500Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
