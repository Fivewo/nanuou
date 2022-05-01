import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
    '/guide/':[
        {
            text: '攻略',
            children: [
                '/guide/README.md',
                '/guide/freshman-entry.md',
                '/guide/freshman-puzzle.md',
            ]
        }
    ],
    '/campus/':[
        {
            text: '校园生活',
            children: [
                '/campus/README.md',
                '/campus/dorm.md',
                '/campus/store.md',
                '/campus/canteen.md',
                '/campus/studies.md',
                '/campus/express.md',
                '/campus/carry-out.md',
                '/campus/military-training.md',
                '/campus/card.md',
                '/campus/network.md',
                '/campus/library.md',
                '/campus/traffic.md',
            ]
        }
    ],
}