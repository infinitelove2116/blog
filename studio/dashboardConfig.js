export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d94cc5ecd94c231d493df51',
                  title: 'Sanity Studio',
                  name: 'blog-studio-189rbnfk',
                  apiId: 'faf6bde5-1444-44d0-922d-44d5d2e12e01'
                },
                {
                  buildHookId: '5d94cc5e478a36fae85d3225',
                  title: 'Blog Website',
                  name: 'blog-web-61fhazmk',
                  apiId: '8c929b19-9329-49dc-acb3-3f7559c552c6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/infinitelove2116/blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://blog-web-61fhazmk.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
