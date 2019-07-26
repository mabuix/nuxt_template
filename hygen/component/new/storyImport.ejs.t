---
inject: true
after: import { withInfo }
to: '<%= story ? `stories/${category}.ts` : null %>'
---
import <%= name %> from '~/components/<%= category %>/<%= name %>.vue'
