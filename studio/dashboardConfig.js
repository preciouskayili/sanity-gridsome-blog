export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '625513de50d1a0032926f85b',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-q9bntbqj',
                  apiId: '6c12bcb2-985e-40b1-ade9-a3fd1561243e'
                },
                {
                  buildHookId: '625513deccda7d01830509b4',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-z8pvutb1',
                  apiId: '1adb6c5d-f7b4-43a8-9e8a-83201fd44926'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/preciouskayili/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-z8pvutb1.netlify.app', category: 'apps'}
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
