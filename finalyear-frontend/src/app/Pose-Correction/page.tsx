import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function Component() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#1e1e1e] to-[#2c2c2c] dark:bg-gray-950">
      <div className="absolute inset-0 bg-black/50 dark:bg-gray-950/50" />
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 py-12 md:py-20 lg:py-24">
        <div className="max-w-xl space-y-6 rounded-lg bg-white/10 backdrop-blur-lg p-6 shadow-lg dark:bg-gray-800/10 md:p-8 lg:p-10">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
              Yoga Pose Correction
            </h1>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 text-white">
                  <SpaceIcon className="h-5 w-5" />
                  <span>Select Pose</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64 space-y-2 p-4 bg-white/10 backdrop-blur-lg text-white">
                <div className="text-sm font-semibold">Choose a Pose</div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a pose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mountain">Mountain Pose</SelectItem>
                    <SelectItem value="tree">Tree Pose</SelectItem>
                    <SelectItem value="warrior">Warrior Pose</SelectItem>
                    <SelectItem value="child">Child's Pose</SelectItem>
                    <SelectItem value="downward-dog">Downward-Facing Dog</SelectItem>
                  </SelectContent>
                </Select>
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="w-full max-w-[200px] bg-gradient-to-r from-[#4b6bff] to-[#9b5de5] text-white shadow-lg shadow-[#4b6bff]/50 hover:shadow-[#9b5de5]/50"
            >
              Upload
            </Button>
          </div>
          <div className="prose text-white/80 dark:prose-invert">
            <p>
              Elevate your yoga practice with our cutting-edge pose correction feature. Select a pose from the
              futuristic dropdown, then upload a photo or video of your form. Our advanced AI will analyze your
              alignment and provide personalized feedback to help you achieve perfect technique.
            </p>
            <p>
              Whether you're a seasoned yogi or just starting your journey, this innovative tool will take your practice
              to new heights. Unlock deeper mindfulness and unparalleled performance with our state-of-the-art pose
              correction system.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function SpaceIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
    </svg>
  )
}