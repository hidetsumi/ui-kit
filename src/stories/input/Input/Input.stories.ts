import { Input } from "@/components/ui/input";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Inputs/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    type: "email",
    placeholder: "Email"
  }
}
