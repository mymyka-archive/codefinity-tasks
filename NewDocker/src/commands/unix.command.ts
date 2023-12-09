export const unixRm = (file: string) => {
  console.log(`rm ${file}`);
};

export const unixRmDir = (dir: string) => {
  console.log(`rm -rf ${dir}`);
};

export const unixMkdir = (dir: string) => {
  console.log(`mkdir ${dir}`);
};

export const unixCd = (dir: string) => {
  console.log(`cd ${dir}`);
};
