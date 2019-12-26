import subprocess

src="G:\guvi\python\cd1.py"
dst="G:\guvi\python\cd2.py"
cmd='copy "%s" "%s"' % (src, dst)

status = subprocess.call(cmd, shell=True)
if status != 0:
     if status < 0:
         print("Killed by signal", status)
     else:
         print("Command failed with return code - ", status)
else:
     print('Execution of %s passed!\n' % cmd)