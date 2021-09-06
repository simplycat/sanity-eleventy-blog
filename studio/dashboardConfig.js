export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '61363225ec9c0a0934d8a09c',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-w6d24jyo',
                  apiId: 'da685ea5-35f6-4929-b35c-98463787fdcd'
                },
                {
                  buildHookId: '6136322556506b0f0fd77250',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-rmssz4k4',
                  apiId: 'cfa09528-9ab8-49bc-8b37-9d1b941ec2a5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simplycat/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-rmssz4k4.netlify.app', category: 'apps'}
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
