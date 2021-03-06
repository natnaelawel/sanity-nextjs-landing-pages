export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8dbfd4418237861d6a5541',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-83xy4gre',
                  apiId: 'aa05c191-83a4-47e1-abdb-38d361873d76'
                },
                {
                  buildHookId: '5f8dbfd4af028e83f4992ea6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-81nsic3e',
                  apiId: 'd062bef8-5221-4274-ae37-03105b57951e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/natnaelawel/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-81nsic3e.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
