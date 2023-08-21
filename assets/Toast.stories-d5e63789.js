var s=Object.defineProperty;var t=(n,o)=>s(n,"name",{value:o,configurable:!0});import{d as r,e as i,a as p}from"./index-d8709170.js";import{a as l,j as e}from"./jsx-runtime-322b5eb5.js";import{K as d}from"./iframe-ba73602a.js";import"./index-0ddbced7.js";import"./index-c65c10c0.js";const y={parameters:{storySource:{source:`import type { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import { Button, Toast, ToastProps, ToastProvider } from '@spica-ui/react'

export default {
  title: 'Overlay/Toast',
  component: Toast,
  args: {
    open: false,
  },
  argTypes: {
    open: {
      control: 'boolean',
    },
  },
} as Meta<ToastProps>

export const Default: Story<ToastProps> = (args) => {
  const [, updateArgs] = useArgs()

  return (
    <ToastProvider swipeDirection="right" duration={3000}>
      <Button
        variant="solid"
        size="md"
        onClick={() => updateArgs({ open: true })}
      >
        Open
      </Button>
      <Toast
        {...args}
        title="Agendamento realizado"
        onOpenChange={(open) => updateArgs({ open })}
      >
        Quarta-feira, 23 de Outubro às 16h
      </Toast>
    </ToastProvider>
  )
}
`,locationsMap:{default:{startLoc:{col:42,line:18},endLoc:{col:1,line:39},startBody:{col:42,line:18},endBody:{col:1,line:39}}}}},title:"Overlay/Toast",component:r,args:{open:!1},argTypes:{open:{control:"boolean"}}},h=t(n=>{const[,o]=d();return l(i,{swipeDirection:"right",duration:3e3,children:[e(p,{variant:"solid",size:"md",onClick:()=>o({open:!0}),children:"Open"}),e(r,{...n,title:"Agendamento realizado",onOpenChange:a=>o({open:a}),children:"Quarta-feira, 23 de Outubro às 16h"})]})},"Default"),A=["Default"];export{h as Default,A as __namedExportsOrder,y as default};
//# sourceMappingURL=Toast.stories-d5e63789.js.map
