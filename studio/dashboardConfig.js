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
                  buildHookId: '5dba72def35fbc1d72dd10c3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-otbzgf91',
                  apiId: '201fda36-c545-45e1-981f-507cf4e812df'
                },
                {
                  buildHookId: '5dba72de06002b930a0688b2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ooiz9ww6',
                  apiId: 'dc4b7df5-5a1c-4ee5-bcfc-69a057dab9b8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ankalago/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ooiz9ww6.netlify.com', category: 'apps'}
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
